using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.Core.Entities;

public class MenuItem : BaseEntity
{
    public string Title { get; set; }
    
    public string Url { get; set; }
    
    public string Icon { get; set; }
    
    public virtual ICollection<Role> Roles { get; set; }
}