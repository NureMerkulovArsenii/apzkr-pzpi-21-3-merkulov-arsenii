using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class DeleteRoomHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public DeleteRoomHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int id)
    {
        var rowsAffected = await _unitOfWork.RoomRepository.ExecuteDeleteAsync(r => r.Id == id);
        
        if (rowsAffected == 0)
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));
    }
}