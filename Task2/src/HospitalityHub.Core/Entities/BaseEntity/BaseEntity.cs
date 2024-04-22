using System.ComponentModel.DataAnnotations;

namespace HospitalityHub.Core.Entities;

public class BaseEntity : IBaseEntity
{
    [Key]
    public int Id { get; set; }

    public DateTime DateUpdated { get; set; }

    public DateTime DateCreated { get; set; }

}
