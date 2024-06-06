using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.DoorLockServiceProxy;
using HospitalityHub.Localization;
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

    public async Task<bool> HandleAsync(int customerId, int bookingId, string code)
    {
        var bookingExists =
            await _unitOfWork.BookingRepository.ExistAsync(x => x.Id == bookingId && x.Customer.Id == customerId);
        if (!bookingExists)
            throw new HospitalityHubException(Resources.Get("BOOKING_NOT_FOUND"));

        var res = await _unitOfWork.BookingRepository.ExecuteUpdateAsync(
            x => x.Id == bookingId && x.Customer.Id == customerId,
            calls => calls
                .SetProperty(booking => booking.CheckInDate, DateTime.Now));

        if (res > 0)
            await SetDoorLockCodeAsync(bookingId, code);

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

        if (!string.IsNullOrEmpty(room.ApiKey))
            return await _doorLockServiceProxy.SetDoorLockCodeAsync(room.BaseLockUri, code);

        var apiKey = Guid.NewGuid().ToString();

        await _doorLockServiceProxy.SetApiKeyAsync(room.BaseLockUri, apiKey);
        await _unitOfWork.RoomRepository.ExecuteUpdateAsync(x => x.Id == room.RoomId,
            calls => calls
                .SetProperty(x => x.ApiKey, apiKey));

        return await _doorLockServiceProxy.SetDoorLockCodeAsync(room.BaseLockUri, code);
    }
}