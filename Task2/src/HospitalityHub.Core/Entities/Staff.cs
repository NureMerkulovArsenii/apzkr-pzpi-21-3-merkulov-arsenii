namespace HospitalityHub.Core.Entities;

public class Staff : BaseEntity
{
    public string Position { get; set; }
    public int UserId { get; set; }
    public virtual User User { get; set; }
}