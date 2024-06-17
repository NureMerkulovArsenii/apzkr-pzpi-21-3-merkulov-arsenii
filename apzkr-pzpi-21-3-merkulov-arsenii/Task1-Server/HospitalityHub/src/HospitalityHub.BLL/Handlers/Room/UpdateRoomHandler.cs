using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Room;

public class UpdateRoomHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateRoomHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(UpdateRoomRequest request)
    {
        var isRoomExists = await _unitOfWork.RoomRepository.ExistAsync(x => x.Id == request.Id);
        if (!isRoomExists)
        {
            throw new Exception(Resources.Get("ROOM_NOT_FOUND"));
        }


        _unitOfWork.RoomRepository.Update(new Core.Entities.Room
        {
            Id = request.Id,
            Number = request.Number,
            Status = request.Status,
            BasePrice = request.BasePrice,
            DiscountPercent = request.DiscountPercent,
            Stage = request.Stage,
            RoomType = request.RoomType,
            HotelId = request.HotelId,
            BaseLockUri = request.BaseLockUri,
            ApiKey = request.ApiKey,
        });

        await _unitOfWork.SaveAsync();
    }
}