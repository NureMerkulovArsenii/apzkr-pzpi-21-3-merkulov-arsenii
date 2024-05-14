using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.DoorLockServiceProxy;
using HospitalityHub.Localization;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Booking;

public class CheckOutHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;
    private IDoorLockServiceProxy _doorLockServiceProxy;

    public CheckOutHandler(IUnitOfWork unitOfWork, IDoorLockServiceProxy doorLockServiceProxy)
    {
        _unitOfWork = unitOfWork;
        _doorLockServiceProxy = doorLockServiceProxy;
    }

    public async Task<bool> HandleAsync(int userId, int bookingId)
    {
        var bookingExists = await _unitOfWork.BookingRepository.ExistAsync(x => x.Id == bookingId && x.Customer.UserId == userId);
        if (!bookingExists)
            throw new HospitalityHubException(Resources.Get("BOOKING_NOT_FOUND"));
        
        var res = await _unitOfWork.BookingRepository.ExecuteUpdateAsync(
            x => x.Id == bookingId && x.Customer.UserId == userId,
            calls => calls
                .SetProperty(booking => booking.CheckOutDate, DateTime.Now));
        
        if (res > 0)
            await ResetDoorLockCodeAsync(bookingId);

        return res > 0;
    }
    
    private async Task<bool> ResetDoorLockCodeAsync(int bookingId)
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

        if (room.ApiKey != null) return await _doorLockServiceProxy.ResetDoorLockCodeAsync(room.BaseLockUri);
        
        return false;
    }
    
}