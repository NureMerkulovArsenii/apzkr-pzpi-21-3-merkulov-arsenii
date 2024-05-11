namespace HospitalityHub.Core;

public static class Extensions
{
    public static string JoinBy(this IEnumerable<string> source, string separator)
    {
        return string.Join(separator, source);
    }
}