namespace HospitalityHub.Core.DTOs.Booking;

public record CreateBookingRequest(
    int HotelId,
    int RoomId,
    DateTime CheckIn,
    DateTime CheckOut,
    int NumberOfAdults,
    int NumberOfChildren
);