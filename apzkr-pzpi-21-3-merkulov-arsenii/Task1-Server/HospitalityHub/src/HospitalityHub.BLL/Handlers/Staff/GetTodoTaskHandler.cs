using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.TodoTasks;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Staff;

public class GetTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<TodoTasksResponse> HandleAsync(int taskId)
    {
        var todoTask = await _unitOfWork.TodoTaskRepository.GetByIdAsync(taskId);
        
        if (todoTask == null)
            throw new Exception(Resources.Get("TASK_NOT_FOUND"));

        var todoTaskResponse = new TodoTasksResponse
        {
            Id = todoTask.Id,
            Description = todoTask.Description,
            CompletedDate = todoTask.CompletedDate,
            DueDate = todoTask.DueDate,
            IssuedDate = todoTask.IssuedDate,
            IsCompleted = todoTask.IsCompleted,
            IsFinished = todoTask.IsFinished,
            StaffId = todoTask.StaffId,
            UserFullName = todoTask.Staff.User.LastName + " " + todoTask.Staff.User.FirstName,
        };
        
        return todoTaskResponse;
    }
    
}
