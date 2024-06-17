namespace HospitalityHub.Core.DTOs.Booking;

public record CreateBookingRequest
{
    public int HotelId { get; set; }
    public int RoomId { get; set; }
    public int CustomerId { get; set; }
    public DateTime CheckIn { get; set; }
    public DateTime CheckOut { get; set; }
    public int NumberOfAdults { get; set; }
    public int NumberOfChildren { get; set; }
}