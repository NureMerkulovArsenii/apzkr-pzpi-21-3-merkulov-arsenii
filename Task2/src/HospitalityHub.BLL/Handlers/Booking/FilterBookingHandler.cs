using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Booking;

public class FilterBookingHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public FilterBookingHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<FilterBookingResponse>> HandleAsync(FilterBookingRequest request)
    {
        var bookings = _unitOfWork.BookingRepository.GetAll();

        if (request.CheckIn.HasValue)
            bookings = bookings.Where(b => b.CheckInBooking.Date >= request.CheckIn.Value.Date);

        if (request.CheckOut.HasValue)
            bookings = bookings.Where(b => b.CheckOutBooking.Date <= request.CheckOut.Value.Date);

        if (request.HotelId.HasValue)
            bookings = bookings.Where(b => b.Room.HotelId == request.HotelId.Value);

        if (request.RoomType.HasValue)
            bookings = bookings.Where(b => b.Room.RoomType == request.RoomType.Value);

        var bookingResponses = await bookings.Select(b => new FilterBookingResponse
        {
            BookingId = b.Id,
            CustomerId = b.CustomerId,
            RoomId = b.RoomId,
            CheckIn = b.CheckInBooking,
            CheckOut = b.CheckOutBooking,
            TotalPrice = b.TotalPrice,
            TotalDiscountPercent = b.TotalDiscountPercent,
            IsPaid = b.IsPaid,
            RoomType = b.Room.RoomType,
            NumberOfAdults = b.NumberOfAdults,
            NumberOfChildren = b.NumberOfChildren
        }).ToListAsync();

        return bookingResponses;
    }
}