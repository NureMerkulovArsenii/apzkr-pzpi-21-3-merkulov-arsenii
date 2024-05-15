namespace HospitalityHub.Core.DTOs.Booking;

public record UpdateBookingRequest(
    int BookingId,
    DateTime CheckIn,
    DateTime CheckOut,
    int NumberOfAdults,
    int NumberOfChildren
);