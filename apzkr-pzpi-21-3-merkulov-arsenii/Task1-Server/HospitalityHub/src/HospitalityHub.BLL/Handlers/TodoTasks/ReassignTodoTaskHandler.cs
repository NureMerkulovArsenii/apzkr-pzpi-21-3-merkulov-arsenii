using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class ReassignTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public ReassignTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<bool> HandleAsync(int todoTaskId, int oldStaffId, int newStaffId)
    {
        var oldStaffExists = await _unitOfWork.StaffRepository.ExistAsync(x => x.Id == oldStaffId);

        if (!oldStaffExists)
            throw new Exception(Resources.Get("STAFF_NOT_FOUND"));
        
        var newStaffExists = await _unitOfWork.StaffRepository.ExistAsync(x => x.Id == newStaffId);
        
        if (!newStaffExists)
            throw new Exception(Resources.Get("STAFF_NOT_FOUND"));

        var res = await _unitOfWork.TodoTaskRepository.ExecuteUpdateAsync(
            x => x.Id == todoTaskId,
            props => props.SetProperty(task => task.StaffId, newStaffId));
        
        return res > 0;
    }
}