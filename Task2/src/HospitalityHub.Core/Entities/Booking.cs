using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.Entities;

public class Booking : BaseEntity
{
    public int CustomerId { get; set; }
    
    public virtual User Customer { get; set; }

    public int RoomId { get; set; }
    public virtual Room Room { get; set; }

    public DateTime CheckIn { get; set; }

    public DateTime CheckOut { get; set; }

    public decimal TotalPrice { get; set; }

    public decimal TotalDiscountPercent { get; set; }

    public bool IsPaid { get; set; }
    
    public int NumberOfAdults { get; set; }
    
    public int NumberOfChildren { get; set; }
}