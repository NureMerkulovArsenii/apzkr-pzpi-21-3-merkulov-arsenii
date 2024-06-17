using HospitalityHub.Core.DTOs.Hotel;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class CreateHotelHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(CreateHotelRequest request)
    {
        var hotel = new Core.Entities.Hotel
        {
            Name = request.Name,
            Address = request.Address,
            City = request.City,
            Country = request.Country,
            ZipCode = request.ZipCode,
            LockServiceUri = request.LockServiceUri
        };

        await _unitOfWork.HotelRepository.AddAsync(hotel);
        await _unitOfWork.SaveAsync();
    }
}