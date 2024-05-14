using HospitalityHub.Core.DTOs.Hotel;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class GetHotelHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<HotelResponse> HandleAsync(int id)
    {
        var hotel = await _unitOfWork.HotelRepository.GetByIdAsync(id);
        if(hotel == null)
            throw new Exception(Resources.Get("HOTEL_NOT_FOUND"));
        
        return new HotelResponse(
            hotel.Id,
            hotel.Name,
            hotel.Address,
            hotel.City,
            hotel.Country,
            hotel.ZipCode,
            hotel.LockServiceUri
        );
    }
}
