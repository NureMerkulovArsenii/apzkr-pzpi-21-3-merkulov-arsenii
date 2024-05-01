using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.Core.Entities;

public class User : IdentityUser, IBaseEntity
{
    public string Email { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public bool IsEnabled { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; }
}
