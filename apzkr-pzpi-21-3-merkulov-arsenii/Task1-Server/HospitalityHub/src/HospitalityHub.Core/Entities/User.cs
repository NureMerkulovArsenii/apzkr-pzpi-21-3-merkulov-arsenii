using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.Core.Entities;

public class User : IdentityUser<int>, IBaseEntity
{
    [MaxLength(50)]
    public string FirstName { get; set; }
    
    [MaxLength(50)]
    public string LastName { get; set; }

   // public virtual Customer Customer { get; set; }
    
    public virtual Staff Staff { get; set; }

    public virtual ICollection<Role> Roles { get; set; }

}
