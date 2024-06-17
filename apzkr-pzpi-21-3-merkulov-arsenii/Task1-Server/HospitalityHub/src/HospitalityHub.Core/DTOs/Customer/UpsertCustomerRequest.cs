namespace HospitalityHub.Core.DTOs.Customer;

public record UpsertCustomerRequest
{
    public string FirstName { get; init; }
    public string LastName { get; init; }
    public string Email { get; init; }
    public string Phone { get; init; }
}