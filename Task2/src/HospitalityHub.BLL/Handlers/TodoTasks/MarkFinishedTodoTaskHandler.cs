using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;

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
            throw new Exception("StaffId in the path and in the todo task do not match.");
        
        todoTask.IsCompleted = isCompleted;
        todoTask.IsFinished = true;
        todoTask.CompletedDate = DateTime.Now;
        
        await _unitOfWork.SaveAsync();
    }
    
}