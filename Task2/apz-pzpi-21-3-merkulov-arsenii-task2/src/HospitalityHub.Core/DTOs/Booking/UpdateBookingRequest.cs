namespace HospitalityHub.Core.DTOs.Booking;

public record UpdateBookingRequest
{
  public int CustomerId { get; set; }
  public int BookingId {get;set;}
  public DateTime CheckIn {get;set;}
  public DateTime CheckOut {get;set;}
  public int NumberOfAdults {get;set;}
  public int NumberOfChildren {get;set;}
  
  public int RoomId {get;set;}
}