namespace HospitalityHub.DoorLockServiceProxy;

public abstract class BaseDoorLockServiceProxy
{
    protected readonly IHttpClientFactory Factory;

    protected BaseDoorLockServiceProxy(IHttpClientFactory factory)
    {
        Factory = factory;
    }
    
}
