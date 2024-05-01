using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.Entities;

public class Room : BaseEntity
{
    public int Number { get; set; }

    public ERoomStatus Status { get; set; }

    /// <summary>
    /// Price per night
    /// </summary>
    public decimal BasePrice{ get; set; }

    /// <summary>
    /// Discount in percentage 
    /// </summary>
    public decimal DiscountPercent { get; set; }

    public int Stage { get; set; }

    public int HotelId { get; set; }

    public virtual Hotel Hotel { get; set; }

    public virtual ICollection<RoomPlace> RoomPlaces { get; set; }
    
    public virtual ICollection<Photo> Photos { get; set; }
    
    public virtual ICollection<Booking> Bookings { get; set; }
    
}
