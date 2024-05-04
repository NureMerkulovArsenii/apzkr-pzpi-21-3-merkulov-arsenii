using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Booking;

public class CreateBookingHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateBookingHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int userId, CreateBookingRequest request)
    {
        var hotel = await _unitOfWork.HotelRepository.GetByIdAsync(request.HotelId);

        if (hotel == null)
            throw new Exception("Hotel not found");
        
        var customer = await _unitOfWork.CustomerRepository.GetByIdAsync(userId);
        
        if (customer == null)
            throw new Exception("Customer not found");

        var room = await _unitOfWork.RoomRepository.GetByIdAsync(request.RoomId);

        if (room == null)
            throw new Exception("Room not found");

        var isRoomAvailable = room.Bookings.Any(x => x.CheckInBooking >= request.CheckIn && x.CheckOutBooking <= request.CheckOut);
        
        if (isRoomAvailable)
            throw new Exception("Room is not available");

        var booking = new Core.Entities.Booking
        {
            Room = room,
            CustomerId = customer.Id,
            CheckInBooking = request.CheckIn,
            CheckOutBooking = request.CheckOut,
            NumberOfAdults = request.NumberOfAdults,
            NumberOfChildren = request.NumberOfChildren,
        };

        await _unitOfWork.BookingRepository.AddAsync(booking);
        await _unitOfWork.SaveAsync();
    }
}
