using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Staff;

public class RemoveStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public RemoveStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<bool> HandleAsync(int staffId)
    {
        var affectedRows = await _unitOfWork.StaffRepository.ExecuteDeleteAsync(x => x.Id == staffId);
        
        return affectedRows > 0;
    }
    
}