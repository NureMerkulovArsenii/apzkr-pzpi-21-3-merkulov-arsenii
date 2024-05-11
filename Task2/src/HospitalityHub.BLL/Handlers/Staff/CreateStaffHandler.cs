using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Staff;

public class CreateStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateStaffHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<int> HandleAsync(CreateStaffRequest request)
    {
        var staff = new Core.Entities.Staff
        {
            FirstName = request.FirstName,
            SecondName = request.SecondName,
            LastName = request.LastName,
            Position = request.Position,
            UserId = request.UserId
        };

        await _unitOfWork.StaffRepository.AddAsync(staff);
        await _unitOfWork.SaveAsync();

        return staff.Id;
    }
    
}