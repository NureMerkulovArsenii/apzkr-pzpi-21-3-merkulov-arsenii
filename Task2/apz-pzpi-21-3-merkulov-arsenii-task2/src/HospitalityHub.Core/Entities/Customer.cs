namespace HospitalityHub.Core.Entities;

public class Customer : BaseEntity
{
    public bool IsEnabled { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; }

    public int UserId { get; set; }
    
    public virtual User User { get; set; }
}