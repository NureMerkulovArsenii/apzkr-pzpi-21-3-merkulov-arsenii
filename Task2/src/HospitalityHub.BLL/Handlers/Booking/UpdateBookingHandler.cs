using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Booking;

public class UpdateBookingHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateBookingHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int userId, UpdateBookingRequest request)
    {
        var booking = await _unitOfWork.BookingRepository.GetByIdAsync(request.BookingId);

        if (booking == null)
            throw new Exception(Resources.Get("BOOKING_NOT_FOUND"));
        
        var customer = await _unitOfWork.CustomerRepository.GetByIdAsync(userId);
        
        if (customer == null)
            throw new Exception(Resources.Get("CUSTOMER_NOT_FOUND"));

        if (booking.CustomerId != customer.Id)
            throw new Exception(Resources.Get("UNAUTHORIZED"));

        var room = await _unitOfWork.RoomRepository.GetByIdAsync(booking.RoomId);

        if (room == null)
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));

        var isRoomAvailable = room.Bookings.Any(x => x.CheckInBooking >= request.CheckIn && x.CheckOutBooking <= request.CheckOut && x.Id != request.BookingId);
        
        if (isRoomAvailable)
            throw new Exception(Resources.Get("ROOM_NOT_AVAILABLE"));

        booking.CheckInBooking = request.CheckIn;
        booking.CheckOutBooking = request.CheckOut;
        booking.NumberOfAdults = request.NumberOfAdults;
        booking.NumberOfChildren = request.NumberOfChildren;
        booking.TotalPrice = room.BasePrice * (request.CheckOut - request.CheckIn).Days;
        booking.TotalDiscountPercent = room.DiscountPercent;

        _unitOfWork.BookingRepository.Update(booking);
        await _unitOfWork.SaveAsync();
    }
}