namespace HospitalityHub.Core.Extensions;

public static class EnumerableExtensions
{
    public static string JoinBy(this IEnumerable<string> source, string separator)
    {
        return string.Join(separator, source);
    }
}