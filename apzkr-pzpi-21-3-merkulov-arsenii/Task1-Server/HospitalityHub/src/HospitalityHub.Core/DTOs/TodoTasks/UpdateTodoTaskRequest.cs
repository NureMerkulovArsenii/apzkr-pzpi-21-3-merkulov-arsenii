namespace HospitalityHub.Core.DTOs.TodoTasks;

public record UpdateTodoTaskRequest(string Description, DateTime? DueDate, bool IsCompleted, bool IsFinished);
