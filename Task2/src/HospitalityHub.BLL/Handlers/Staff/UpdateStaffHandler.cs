using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Staff;

public class UpdateStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<bool> HandleAsync(int staffId, UpdateStaffRequest request)
    {
        var affectedRows = await _unitOfWork.StaffRepository.ExecuteUpdateAsync(x => x.Id == staffId,
            calls => calls.SetProperty(staff => staff.FirstName, request.FirstName)
                .SetProperty(staff => staff.SecondName, request.SecondName)
                .SetProperty(staff => staff.HotelId, request.HotelId)
                .SetProperty(staff => staff.LastName, request.LastName)
                .SetProperty(staff => staff.Position, request.Position));
        
        return affectedRows > 0;
    }
    
}