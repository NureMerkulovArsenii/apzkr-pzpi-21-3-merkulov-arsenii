using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Booking;

public class CancelBookingHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CancelBookingHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int userId, int bookingId)
    {
        var booking = await _unitOfWork.BookingRepository.GetByIdAsync(bookingId);

        if (booking == null)
            throw new Exception(Resources.Get("BOOKING_NOT_FOUND"));

        if (booking.Customer.UserId != userId)
            throw new Exception(Resources.Get("UNAUTHORIZED"));

        _unitOfWork.BookingRepository.Delete(booking);
        await _unitOfWork.SaveAsync();
    }
}