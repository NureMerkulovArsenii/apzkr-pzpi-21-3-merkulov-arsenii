using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class GetRoomsListHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetRoomsListHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<RoomResponse>> HandleAsync(int hotelId)
    {
        var rooms = await _unitOfWork.RoomRepository.GetByConditionAsync(x => x.HotelId == hotelId);
        
        if(rooms.Count == 0)
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));
        
        var response = new List<RoomResponse>();
        
        foreach (var room in rooms)
        {
            response.Add(new RoomResponse
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
            ));
        }
        
        return response;
    }
   
}
