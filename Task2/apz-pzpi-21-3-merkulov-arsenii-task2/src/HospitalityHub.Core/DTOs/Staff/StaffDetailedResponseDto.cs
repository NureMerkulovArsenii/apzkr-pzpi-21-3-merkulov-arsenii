namespace HospitalityHub.Core.DTOs.Staff;

public record StaffDetailedResponseDto
{
    public int Id { get; set; }
    
    public int UserId { get; set; }

    public int HotelId { get; set; }

    public string UserEmail { get; set; }
    
    public string FirstName { get; set; }
    
    public string SecondName { get; set; }
    
    public string LastName { get; set; }
    
    public string Position { get; set; }
    
    public int ActiveTasksCount { get; set; }
    
}