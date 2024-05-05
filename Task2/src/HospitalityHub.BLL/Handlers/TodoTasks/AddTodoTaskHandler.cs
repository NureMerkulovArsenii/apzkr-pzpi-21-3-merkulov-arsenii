using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.TodoTasks;
using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.TodoTasks;

public class AddTodoTaskHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public AddTodoTaskHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
        
    }

    public async Task HandleAsync(int staffId, CreateTodoTaskRequest request)
    {
        var staff = await _unitOfWork.StaffRepository.GetByIdAsync(staffId);
        
        if (staff == null)
            throw new Exception("Staff not found.");

        var todoTask = new TodoTask
        {
            StaffId = staffId,
            Description = request.Description,
            DueDate = request.DueDate,
            IssuedDate = request.IssuedDate,
        };

        await _unitOfWork.TodoTaskRepository.AddAsync(todoTask);
        await _unitOfWork.SaveAsync();
        
    }
    
}