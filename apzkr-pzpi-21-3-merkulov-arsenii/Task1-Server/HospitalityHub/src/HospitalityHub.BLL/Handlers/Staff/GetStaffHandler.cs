using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Staff;

public class GetStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<StaffDetailedResponseDto> HandleAsync(int staffId)
    {
        var staff = await _unitOfWork.StaffRepository.GetByIdAsync(staffId);

        if (staff == null)
            throw new Exception(Resources.Get("STAFF_NOT_FOUND"));

        return new StaffDetailedResponseDto
        {
            Id = staff.Id,
            UserId = staff.UserId,
            HotelId = staff.HotelId,
            FirstName = staff.FirstName,
            LastName = staff.LastName,
            SecondName = staff.SecondName,
            UserEmail = staff.User.Email,
            Position = staff.Position,
            ActiveTasksCount = staff.TodoTasks.Count(x => !x.IsCompleted),
        };
    }
    
}