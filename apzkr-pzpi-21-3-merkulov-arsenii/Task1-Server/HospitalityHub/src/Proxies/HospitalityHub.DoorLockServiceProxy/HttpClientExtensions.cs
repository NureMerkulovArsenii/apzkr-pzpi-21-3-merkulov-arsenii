using System.Text;
using System.Text.Json;

namespace HospitalityHub.DoorLockServiceProxy;

public static class HttpClientExtensions
{
    public static async Task<TResult> GetFromJsonAsync<TResult>(this HttpClient client, string requestUri)
    {
        var response = await client.GetAsync(requestUri);

        var content = await response.Content.ReadAsStringAsync();

        if (!response.IsSuccessStatusCode)
            throw new Exception(
                $"Filed to get from {requestUri}. StatusCode: {response.StatusCode} Content: {content}");
        
        if(typeof(TResult) == typeof(string))
            return (TResult)(object)content;
        
        return JsonSerializer.Deserialize<TResult>(content);
    }
    
    public static async Task<TResult> PostAsJsonAsync<TResult>(this HttpClient client, string requestUri, object content = default)
    {
        var json = JsonSerializer.Serialize(content);
        var httpContent = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await client.PostAsync(requestUri, httpContent);
        
        var responseContent = await response.Content.ReadAsStringAsync();

        if (!response.IsSuccessStatusCode)
            throw new Exception(
                $"Filed to post to {requestUri}. StatusCode: {response.StatusCode} Content: {responseContent}");
        
        return JsonSerializer.Deserialize<TResult>(responseContent);
    }
}
