namespace HospitalityHub.Core.Entities;

public class TodoTask : BaseEntity
{
    public string Description { get; set; }

    public DateTime? CompletedDate { get; set; }
    public DateTime? DueDate { get; set; }
    public DateTime IssuedDate { get; set; }
    public bool IsCompleted { get; set; }
    
    public bool IsFinished{ get; set; }
    public int StaffId { get; set; }
    public virtual Staff Staff { get; set; }
}