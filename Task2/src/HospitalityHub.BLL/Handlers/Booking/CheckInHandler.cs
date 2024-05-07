using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.DoorLockServiceProxy;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Booking;

public class CheckInHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IDoorLockServiceProxy _doorLockServiceProxy;

    public CheckInHandler(IUnitOfWork unitOfWork, IDoorLockServiceProxy doorLockServiceProxy)
    {
        _unitOfWork = unitOfWork;
        _doorLockServiceProxy = doorLockServiceProxy;
    }

    public async Task<bool> HandleAsync(int userId, int bookingId)
    {
        var res = await _unitOfWork.BookingRepository.ExecuteUpdateAsync(
            x => x.Id == bookingId && x.Customer.UserId == userId,
            calls => calls
                .SetProperty(booking => booking.CheckInDate, DateTime.Now));

        //Todo: remove hardcoded value
        if (res > 0)
            await SetDoorLockCodeAsync(bookingId, "1234");

        return res > 0;
    }

    private async Task<bool> SetDoorLockCodeAsync(int bookingId, string code)
    {
        var room = await _unitOfWork.BookingRepository.GetAllByCondition(x => x.Id == bookingId)
            .Select(x => new
            {
                x.RoomId,
                x.Room.BaseLockUri,
                x.Room.ApiKey
            })
            .AsNoTracking()
            .FirstOrDefaultAsync();

        if (room.ApiKey != null) return await _doorLockServiceProxy.SetDoorLockCodeAsync(room.BaseLockUri, code);
        
        var apiKey = Guid.NewGuid().ToString();
        
        await _doorLockServiceProxy.SetApiKeyAsync(room.BaseLockUri, apiKey);
        await _unitOfWork.RoomRepository.ExecuteUpdateAsync(x => x.Id == room.RoomId,
            calls => calls
                .SetProperty(x => x.ApiKey, apiKey));

        return await _doorLockServiceProxy.SetDoorLockCodeAsync(room.BaseLockUri, code);
    }
}