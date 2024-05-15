namespace HospitalityHub.Core.DTOs.Hotel;

public record HotelResponse(
    int Id,
    string Name,
    string Address,
    string City,
    string Country,
    string ZipCode,
    string LockServiceUri
);