using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.RoomPlace;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Room;

public class UpdateRoomPlaceHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateRoomPlaceHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<bool> HandleAsync(int roomId, int roomPlaceId, UpdateRoomPlaceRequest request)
    {
        var res = await _unitOfWork.RoomPlaceRepository.ExecuteUpdateAsync(
            x => x.Id == roomPlaceId && x.RoomId == roomId,
            calls => calls
                .SetProperty(roomPlace => roomPlace.Type, request.Type));

        return res > 0;
    }
    
}