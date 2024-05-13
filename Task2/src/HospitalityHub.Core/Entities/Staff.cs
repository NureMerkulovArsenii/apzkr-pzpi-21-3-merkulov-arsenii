namespace HospitalityHub.Core.Entities;

public class Staff : BaseEntity
{
    public string FirstName { get; set; }
    
    public string SecondName { get; set; }
    
    public string LastName { get; set; }

    public string Position { get; set; }
    
    public int UserId { get; set; }
    
    public virtual User User { get; set; }
    
    public int HotelId { get; set; }
    
    public virtual Hotel Hotel { get; set; }
    
    public virtual ICollection<TodoTask> TodoTasks { get; set; }
}