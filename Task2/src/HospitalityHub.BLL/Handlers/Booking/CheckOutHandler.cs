using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Booking;

public class CheckOutHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CheckOutHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<bool> HandleAsync(int userId, int bookingId)
    {
        var res = await _unitOfWork.BookingRepository.ExecuteUpdateAsync(
            x => x.Id == bookingId && x.Customer.UserId == userId,
            calls => calls
                .SetProperty(booking => booking.CheckOutDate, DateTime.Now));

        return res > 0;
    }
    
}