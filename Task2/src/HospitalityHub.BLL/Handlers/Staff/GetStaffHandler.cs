using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Staff;

public class GetStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<StaffResponse> HandleAsync(int staffId)
    {
        var staff = await _unitOfWork.StaffRepository.GetByIdAsync(staffId);

        if (staff == null)
            throw new Exception("Staff not found.");

        return new StaffResponse
        {
            Id = staff.Id,
            UserId = staff.UserId,
            UserFullName = staff.LastName + " " + staff.FirstName + " " + staff.SecondName,
            Position = staff.Position,
            ActiveTasksCount = staff.TodoTasks.Count(x => !x.IsCompleted)
        };
    }
    
}