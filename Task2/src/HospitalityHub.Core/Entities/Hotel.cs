
namespace HospitalityHub.Core.Entities;

public class Hotel : BaseEntity
{
    public string Name { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public string ZipCode { get; set; }
    public string LockServiceUri { get; set; }
    
    public virtual ICollection<Room> Rooms { get; set; }
}