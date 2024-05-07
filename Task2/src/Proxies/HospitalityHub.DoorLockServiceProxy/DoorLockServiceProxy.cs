namespace HospitalityHub.DoorLockServiceProxy;

public class DoorLockServiceProxy : BaseDoorLockServiceProxy, IDoorLockServiceProxy
{
    private static string _apiKey;
    
    public string SetServiceApiKeyValue { get => _apiKey; set => _apiKey = value; }

    public DoorLockServiceProxy(IHttpClientFactory factory) : base(factory)
    {
    }

    public async Task SetApiKeyAsync(string baseUri, string apiKey)
    {
        var client = Factory.CreateClient("DoorLockService");
        client.BaseAddress = new Uri(baseUri);

        var response = await client.PostAsJsonAsync<bool>($"/set-api-key?api-key={apiKey}");

        if (response)
        {
            _apiKey = apiKey;
        }
        else
        {
            throw new Exception("Failed to set API key");
        }
    }

    public async Task<string> GetApiKeyAsync(string baseUri)
    {
        var client = Factory.CreateClient("DoorLockService");
        client.BaseAddress = new Uri(baseUri);

        var response = await client.GetFromJsonAsync<string>("/get-api-key");

        return response;
    }

    public async Task<bool> SetDoorLockCodeAsync(string baseUri, string code)
    {
        var client = Factory.CreateClient("DoorLockService");
        client.BaseAddress = new Uri(baseUri);
        client.DefaultRequestHeaders.Add("x-api-key", _apiKey);

        var response = await client.PostAsJsonAsync<bool>($"/set-doorlock-code?code={code}");

        return response;
    }

    public async Task<bool> ResetDoorLockCodeAsync(string baseUri)
    {
        var client = Factory.CreateClient("DoorLockService");
        client.BaseAddress = new Uri(baseUri);
        client.DefaultRequestHeaders.Add("x-api-key", _apiKey);

        var response = await client.PostAsJsonAsync<bool>("/reset-doorlock-code");

        return response;
    }
}