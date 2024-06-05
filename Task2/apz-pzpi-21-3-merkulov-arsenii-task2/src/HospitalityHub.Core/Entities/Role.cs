using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.Core.Entities;

public class Role : IdentityRole<int>, IBaseEntity
{
    
    public Role()
    {
    }
    
    public Role(string name)
    {
        Name = name;
    }
    
    public virtual ICollection<User> Users { get; set; }
    
    public virtual List<MenuItem> MenuItems { get; set; }
    
}
