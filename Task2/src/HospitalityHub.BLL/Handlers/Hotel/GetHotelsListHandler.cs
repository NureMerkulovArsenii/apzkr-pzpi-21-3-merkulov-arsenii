using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Hotel;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class GetHotelsListHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetHotelsListHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<HotelResponse>> HandleAsync()
    {
        var hotels = await _unitOfWork.HotelRepository.GetAll().ToListAsync();

        return hotels.Select(x => new HotelResponse(
            x.Id,
            x.Name,
            x.Address,
            x.City,
            x.Country,
            x.ZipCode,
            x.LockServiceUri
        ));
    }
    
}
