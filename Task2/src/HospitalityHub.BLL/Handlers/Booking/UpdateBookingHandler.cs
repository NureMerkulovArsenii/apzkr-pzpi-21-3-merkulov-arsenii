using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.DAL.UnitOfWork;

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
            throw new Exception("Booking not found");

        if (booking.CustomerId != userId)
            throw new Exception("Unauthorized");

        var room = await _unitOfWork.RoomRepository.GetByIdAsync(booking.RoomId);

        if (room == null)
            throw new Exception("Room not found");

        var isRoomAvailable = room.Bookings.Any(x => x.CheckIn >= request.CheckIn && x.CheckOut <= request.CheckOut && x.Id != request.BookingId);
        
        if (isRoomAvailable)
            throw new Exception("Room is not available");

        booking.CheckIn = request.CheckIn;
        booking.CheckOut = request.CheckOut;
        booking.NumberOfAdults = request.NumberOfAdults;
        booking.NumberOfChildren = request.NumberOfChildren;

        _unitOfWork.BookingRepository.Update(booking);
        await _unitOfWork.SaveAsync();
    }
}