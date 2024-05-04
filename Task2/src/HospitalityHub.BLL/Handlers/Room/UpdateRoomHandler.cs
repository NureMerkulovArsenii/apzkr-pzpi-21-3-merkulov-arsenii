using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.DAL.UnitOfWork;

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
        _unitOfWork.RoomRepository.Update(new Core.Entities.Room
        {
            Id = request.Id,
            Number = request.Number,
            Status = request.Status,
            BasePrice = request.BasePrice,
            DiscountPercent = request.DiscountPercent,
            Stage = request.Stage,
            RoomType = request.RoomType,
            HotelId = request.HotelId
        });
        
        await _unitOfWork.SaveAsync();
    }
}