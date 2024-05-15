using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class MarkFinishedTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public MarkFinishedTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int staffId, int todoTaskId, bool isCompleted)
    {
        var todoTask = await _unitOfWork.TodoTaskRepository.GetByIdAsync(todoTaskId);

        if (todoTask.StaffId != staffId)
            throw new Exception(Resources.Get("TODO_TASKS_NOT_FOUND"));
        
        todoTask.IsCompleted = isCompleted;
        todoTask.IsFinished = true;
        todoTask.CompletedDate = DateTime.Now;
        
        await _unitOfWork.SaveAsync();
    }
    
}