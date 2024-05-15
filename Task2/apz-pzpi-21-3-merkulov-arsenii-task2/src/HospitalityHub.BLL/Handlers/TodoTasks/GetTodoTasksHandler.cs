using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.TodoTasks;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class GetTodoTasksHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;
    
    public GetTodoTasksHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task<List<TodoTasksResponse>> HandleAsync(int staffId)
    {
        var todoTasks = await _unitOfWork.TodoTaskRepository
            .GetAllByCondition(x => x.StaffId == staffId)
            .Select(x => new TodoTasksResponse
            {
                Id = x.Id,
                Description = x.Description,
                DueDate = x.DueDate,
                IssuedDate = x.IssuedDate,
                IsCompleted = x.IsCompleted,
                IsFinished = x.IsFinished,
                CompletedDate = x.CompletedDate,
                UserFullName = $"{x.Staff.SecondName} {x.Staff.FirstName} {x.Staff.LastName}",
                StaffId = x.StaffId
            })
            .ToListAsync();
        
        if (todoTasks == null)
            throw new Exception(Resources.Get("TODO_TASKS_NOT_FOUND"));
        
        return todoTasks;
    }
    
}