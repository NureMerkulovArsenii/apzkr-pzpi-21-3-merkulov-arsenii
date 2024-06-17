namespace HospitalityHub.Core.Exceptions;

public class HospitalityHubException : Exception
{
    public HospitalityHubException(string message) : base(message)
    {
    }

    public HospitalityHubException(string message, Exception innerException) : base(message, innerException)
    {
    }
    
}