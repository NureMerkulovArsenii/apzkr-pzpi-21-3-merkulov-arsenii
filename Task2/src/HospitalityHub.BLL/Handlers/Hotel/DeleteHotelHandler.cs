using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Hotel;

public class DeleteHotelHandler
{
    private readonly IUnitOfWork _unitOfWork;
    
    public DeleteHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    
    public async Task HandleAsync(int id)
    {
        var affectedRows = await _unitOfWork.HotelRepository.ExecuteDeleteAsync(h => h.Id == id);
        
        if (affectedRows == 0)
            throw new HospitalityHubException("Hotel does not exist.");
    }
}
