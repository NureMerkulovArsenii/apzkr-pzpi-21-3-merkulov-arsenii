using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.DTOs.RoomPlace;

public record CreateRoomPlaceRequest(
    ERoomPlaceType Type
);