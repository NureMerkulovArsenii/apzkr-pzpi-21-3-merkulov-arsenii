using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.RoomPlace;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class GetRoomPlacesHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetRoomPlacesHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<RoomPlaceResponse>> HandleAsync(int roomId)
    {
        var room = await _unitOfWork.RoomRepository
            .FirstOrDefaultAsync(x => x.Id == roomId);

        if (room == null)
            throw new HospitalityHubException(Resources.Get("ROOM_NOT_FOUND"));
        
        var res = room.RoomPlaces.ToList()
            .Select(x => new RoomPlaceResponse
            {
                Id = x.Id, Type = (byte)x.Type,
            })
            .ToList();

        return res;
    }
}