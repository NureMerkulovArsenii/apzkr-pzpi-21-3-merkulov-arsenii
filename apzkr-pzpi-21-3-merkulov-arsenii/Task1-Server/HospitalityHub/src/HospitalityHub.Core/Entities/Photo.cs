namespace HospitalityHub.Core.Entities;

public class Photo : BaseEntity
{
    public Guid Guid { get; set; }
    
    public string Url { get; set; }

    public string FileName { get; set; }
}