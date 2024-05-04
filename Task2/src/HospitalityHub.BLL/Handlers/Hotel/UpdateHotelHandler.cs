using HospitalityHub.Core.DTOs.Hotel;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class UpdateHotelHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(UpdateHotelRequest request)
    {
        _unitOfWork.HotelRepository.Update(new Core.Entities.Hotel
        {
            Id = request.Id,
            Name = request.Name,
            Address = request.Address,
            City = request.City,
            Country = request.Country,
            ZipCode = request.ZipCode,
            LockServiceUri = request.LockServiceUri
        });
        
        await _unitOfWork.SaveAsync();
    }
}