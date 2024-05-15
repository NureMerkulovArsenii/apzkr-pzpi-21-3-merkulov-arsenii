using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.DTOs.Booking;

public record FilterBookingRequest(
    DateTime? CheckIn,
    DateTime? CheckOut,
    int? HotelId,
    ERoomType? RoomType
);