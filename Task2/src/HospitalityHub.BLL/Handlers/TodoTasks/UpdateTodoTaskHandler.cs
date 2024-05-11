using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.TodoTasks;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class UpdateTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<bool> HandleAsync(int staffId, int todoTaskId, UpdateTodoTaskRequest request)
    {
        var affectedRows = await _unitOfWork.TodoTaskRepository.ExecuteUpdateAsync(
            x => x.Id == todoTaskId && x.StaffId == staffId,
            calls => calls.SetProperty(x => x.Description, request.Description)
                .SetProperty(x => x.DueDate, request.DueDate)
                .SetProperty(x => x.IsCompleted, request.IsCompleted)
                .SetProperty(x => x.IsFinished, request.IsFinished));

        return affectedRows > 0;
    }
}