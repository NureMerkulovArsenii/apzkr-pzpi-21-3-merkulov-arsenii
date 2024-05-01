using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalityHub.Core.Entities;

public class Booking : BaseEntity
{
    public virtual User User { get; set; }

    public virtual Room Room { get; set; }

    public DateTime CheckIn { get; set; }

    public DateTime CheckOut { get; set; }

    public decimal TotalPrice { get; set; }

    public decimal TotalDiscountPercent { get; set; }

    public bool IsPaid { get; set; }
}