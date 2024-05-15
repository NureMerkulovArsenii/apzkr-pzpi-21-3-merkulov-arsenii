namespace HospitalityHub.Core.DTOs.Staff;

public class StaffResponse
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string UserFullName { get; set; }
    public string Position { get; set; }
    public int ActiveTasksCount { get; set; }
}