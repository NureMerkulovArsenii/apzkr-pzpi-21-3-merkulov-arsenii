using HospitalityHub.Core.DTOs.Hotel;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class UpdateHotelHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int hotelId, UpdateHotelRequest request)
    {
        var hotelExists = await _unitOfWork.HotelRepository.ExistAsync(x => x.Id == hotelId);

        if (!hotelExists)
            throw new HospitalityHubException("Hotel does not exist.");

        await _unitOfWork.HotelRepository.ExecuteUpdateAsync(x => x.Id == hotelId,
            calls => calls.SetProperty(x => x.Name, request.Name)
                .SetProperty(x => x.Address, request.Address)
                .SetProperty(x => x.City, request.City)
                .SetProperty(x => x.Country, request.Country)
                .SetProperty(x => x.ZipCode, request.ZipCode)
                .SetProperty(x => x.LockServiceUri, request.LockServiceUri));
    }
}
