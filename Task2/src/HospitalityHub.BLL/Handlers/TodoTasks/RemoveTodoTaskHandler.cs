using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;

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
            throw new Exception("Staff in the path and in the todo task do not match.");

        _unitOfWork.TodoTaskRepository.Delete(todoTask);
        await _unitOfWork.SaveAsync();
    }
}