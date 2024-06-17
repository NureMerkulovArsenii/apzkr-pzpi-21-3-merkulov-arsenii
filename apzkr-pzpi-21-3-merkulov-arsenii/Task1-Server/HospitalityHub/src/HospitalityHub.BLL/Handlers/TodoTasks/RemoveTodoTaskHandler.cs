using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class RemoveTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public RemoveTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int staffId, int todoTaskId)
    {
        var todoTask = await _unitOfWork.TodoTaskRepository.GetByIdAsync(todoTaskId);

        if (todoTask.StaffId != staffId)
            throw new Exception(Resources.Get("TODO_TASKS_NOT_FOUND"));

        _unitOfWork.TodoTaskRepository.Delete(todoTask);
        await _unitOfWork.SaveAsync();
    }
}