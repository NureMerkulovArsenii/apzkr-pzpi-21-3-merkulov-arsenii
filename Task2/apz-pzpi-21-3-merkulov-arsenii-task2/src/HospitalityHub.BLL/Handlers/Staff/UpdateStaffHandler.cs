using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Staff;

public class UpdateStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<bool> HandleAsync(int staffId, UpsertStaffRequest request)
    {
        var staffExists = await _unitOfWork.StaffRepository.ExistAsync(x => x.Id == staffId);
        if (!staffExists)
            throw new Exception(Resources.Get("STAFF_NOT_FOUND"));
        
        var affectedRows = await _unitOfWork.StaffRepository.ExecuteUpdateAsync(x => x.Id == staffId,
            calls => calls.SetProperty(staff => staff.FirstName, request.FirstName)
                .SetProperty(staff => staff.SecondName, request.SecondName)
                .SetProperty(staff => staff.HotelId, request.HotelId)
                .SetProperty(staff => staff.UserId, request.UserId)
                .SetProperty(staff => staff.LastName, request.LastName)
                .SetProperty(staff => staff.Position, request.Position));
        
        return affectedRows > 0;
    }
    
}