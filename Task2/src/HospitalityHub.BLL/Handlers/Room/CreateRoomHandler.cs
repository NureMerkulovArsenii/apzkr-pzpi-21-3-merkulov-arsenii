using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Room;

public class CreateRoomHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateRoomHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(CreateRoomRequest request)
    {
        var room = new Core.Entities.Room
        {
            Number = request.Number,
            Status = request.Status,
            BasePrice = request.BasePrice,
            DiscountPercent = request.DiscountPercent,
            Stage = request.Stage,
            RoomType = request.RoomType,
            HotelId = request.HotelId,
            BaseLockUri = request.BaseLockUri,
            ApiKey = request.ApiKey
        };

        await _unitOfWork.RoomRepository.AddAsync(room);
        await _unitOfWork.SaveAsync();
    }
}