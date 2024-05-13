using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.DoorLockServiceProxy;

namespace HospitalityHub.BLL.Handlers.Room;

public class SetApiKeyHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IDoorLockServiceProxy _doorLockServiceProxy;

    public SetApiKeyHandler(IUnitOfWork unitOfWork, IDoorLockServiceProxy doorLockServiceProxy)
    {
        _unitOfWork = unitOfWork;
        _doorLockServiceProxy = doorLockServiceProxy;
    }

    public async Task HandleAsync(int roomId)
    {
        try
        {
            var room = await _unitOfWork.RoomRepository.GetByIdAsync(roomId);
            
            if (room == null)
            {
                throw new HospitalityHubException("Room not found");
            }

            var guidKey = Guid.NewGuid().ToString();
        
            await _doorLockServiceProxy.SetApiKeyAsync(room.BaseLockUri, guidKey);

            room.ApiKey = guidKey;

            await _unitOfWork.SaveAsync();
        }
        catch (Exception e)
        {
            throw new HospitalityHubException("Error while setting api key", e);
        }
    }
}