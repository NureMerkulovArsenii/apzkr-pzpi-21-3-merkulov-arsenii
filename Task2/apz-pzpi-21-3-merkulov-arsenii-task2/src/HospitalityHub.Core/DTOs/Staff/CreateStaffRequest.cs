namespace HospitalityHub.Core.DTOs.Staff;

public class CreateStaffRequest
{
    public string FirstName { get; set; }
    
    public string SecondName { get; set; }
    
    public string LastName { get; set; }
    
    public string Position { get; set; }
    
    public int UserId { get; set; }
    
    public int HotelId { get; set; }
}