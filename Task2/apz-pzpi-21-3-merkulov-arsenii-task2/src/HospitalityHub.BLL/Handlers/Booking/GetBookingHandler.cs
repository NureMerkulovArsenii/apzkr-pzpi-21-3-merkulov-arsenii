using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Booking;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Booking;

public class GetBookingHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetBookingHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<FilterBookingResponse> HandleAsync(int id)
    {
        var booking = await _unitOfWork.BookingRepository
            .GetAllByCondition(x => x.Id == id)
            .Select(b => new FilterBookingResponse()
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
            })
            .FirstOrDefaultAsync();

        if (booking == null)
        {
            throw new Exception(Resources.Get("BOOKING_NOT_FOUND"));
        }

        return booking;
    }
}