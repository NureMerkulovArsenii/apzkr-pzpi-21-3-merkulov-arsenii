using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

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
            throw new Exception(Resources.Get("HOTEL_NOT_FOUND"));

        var room = await _unitOfWork.RoomRepository.GetByIdAsync(request.RoomId);

        if (room == null)
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));

        var customer = await _unitOfWork.CustomerRepository
            .FirstOrDefaultAsync(x => x.UserId == userId);

        customer ??= new Customer()
        {
            UserId = userId,
            IsEnabled = true
        };

        var isRoomAvailable =
            room.Bookings.Any(x => x.CheckInBooking >= request.CheckIn && x.CheckOutBooking <= request.CheckOut);

        if (isRoomAvailable)
            throw new Exception(Resources.Get("ROOM_NOT_AVAILABLE"));

        var booking = new Core.Entities.Booking
        {
            Room = room,
            Customer = customer,
            CheckInBooking = request.CheckIn,
            CheckOutBooking = request.CheckOut,
            NumberOfAdults = request.NumberOfAdults,
            NumberOfChildren = request.NumberOfChildren,
            TotalPrice = room.BasePrice * (request.CheckOut - request.CheckIn).Days,
            TotalDiscountPercent = room.DiscountPercent,
        };

        await _unitOfWork.BookingRepository.AddAsync(booking);
        await _unitOfWork.SaveAsync();
    }
}