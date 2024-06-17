namespace HospitalityHub.Core.DTOs.TodoTasks;

public record CreateTodoTaskRequest(string Description, DateTime? DueDate);