namespace HospitalityHub.Core.Entities;

public class Customer : BaseEntity
{
    public string FirstName { get; set; }
    
    public string LastName { get; set; }
    
    public string Email { get; set; }
    
    public string Phone { get; set; }
    
    public bool IsEnabled { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; }
}