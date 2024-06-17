namespace HospitalityHub.DoorLockServiceProxy;

public interface IDoorLockServiceProxy
{
    string SetServiceApiKeyValue { get; set; }
    Task SetApiKeyAsync(string baseUri, string apiKey);
    Task<string> GetApiKeyAsync(string baseUri);
    Task<bool> SetDoorLockCodeAsync(string baseUri, string code);
    Task<bool> ResetDoorLockCodeAsync(string baseUri);
}