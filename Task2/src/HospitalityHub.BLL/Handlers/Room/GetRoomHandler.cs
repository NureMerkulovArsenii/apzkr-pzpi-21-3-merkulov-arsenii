using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class GetRoomHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetRoomHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<RoomResponse> HandleAsync(int id)
    {
        var room = await _unitOfWork.RoomRepository.GetByIdAsync(id);
        
        if(room == null)
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));

        return new RoomResponse
        (
            room.Id,
            room.Number,
            room.Status,
            room.BasePrice,
            room.DiscountPercent,
            room.Stage,
            room.RoomType,
            room.HotelId,
            room.BaseLockUri,
            room.ApiKey
        );
    }
}
