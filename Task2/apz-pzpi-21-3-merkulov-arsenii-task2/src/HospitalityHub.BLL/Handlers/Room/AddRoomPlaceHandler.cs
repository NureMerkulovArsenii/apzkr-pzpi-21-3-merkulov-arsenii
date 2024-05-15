using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.RoomPlace;
using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class AddRoomPlaceHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public AddRoomPlaceHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int roomId, CreateRoomPlaceRequest request)
    {
        var isRoomExists = await _unitOfWork.RoomRepository.ExistAsync(x => x.Id == roomId);
        
        if (!isRoomExists)
        {
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));
        }
        
        var roomPlace = new RoomPlace
        {
            RoomId = roomId,
            Type = request.Type
        };
        
        await _unitOfWork.RoomPlaceRepository.AddAsync(roomPlace);
        await _unitOfWork.SaveAsync();
       
    }
}