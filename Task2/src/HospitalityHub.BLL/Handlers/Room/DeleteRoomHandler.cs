using HospitalityHub.DAL.UnitOfWork;

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
        await _unitOfWork.RoomRepository.ExecuteDeleteAsync(r => r.Id == id);
    }
}