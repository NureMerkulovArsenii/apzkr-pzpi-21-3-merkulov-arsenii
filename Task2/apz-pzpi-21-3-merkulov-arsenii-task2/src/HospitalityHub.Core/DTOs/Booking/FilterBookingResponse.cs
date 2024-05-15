using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.DTOs.Booking;

public class FilterBookingResponse
{
    public int BookingId { get; set; }
    public int CustomerId { get; set; }
    public int RoomId { get; set; }
    public DateTime CheckIn { get; set; }
    public DateTime CheckOut { get; set; }
    public decimal TotalPrice { get; set; }
    public decimal TotalDiscountPercent { get; set; }
    public bool IsPaid { get; set; }
    public ERoomType RoomType { get; set; }
    public int NumberOfAdults { get; set; }
    public int NumberOfChildren { get; set; }
}