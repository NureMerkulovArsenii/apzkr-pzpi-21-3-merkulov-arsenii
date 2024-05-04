using HospitalityHub.DAL.UnitOfWork;

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

        if (roomPlace.RoomId != roomId)
        {
            throw new Exception("RoomId in the path and in the room place do not match.");
        }

        _unitOfWork.RoomPlaceRepository.Delete(roomPlace);
        await _unitOfWork.SaveAsync();
    }
}