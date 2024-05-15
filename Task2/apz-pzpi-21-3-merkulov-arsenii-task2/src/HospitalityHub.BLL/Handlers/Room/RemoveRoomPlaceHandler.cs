using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class RemoveRoomPlaceHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public RemoveRoomPlaceHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int roomId, int roomPlaceId)
    {
        var roomPlace = await _unitOfWork.RoomPlaceRepository.GetByIdAsync(roomPlaceId);

        if (roomPlace == null || roomPlace.RoomId != roomId)
        {
            throw new Exception(Resources.Get("ROOM_PLACE_NOT_FOUND"));
        }

        _unitOfWork.RoomPlaceRepository.Delete(roomPlace);
        await _unitOfWork.SaveAsync();
    }
}