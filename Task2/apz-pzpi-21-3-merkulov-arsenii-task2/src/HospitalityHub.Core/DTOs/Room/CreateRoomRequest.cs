using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.DTOs.Room;

public record CreateRoomRequest(
    int Number,
    ERoomStatus Status,
    decimal BasePrice,
    decimal DiscountPercent,
    int Stage,
    ERoomType RoomType,
    int HotelId,
    string BaseLockUri,
    string ApiKey
);