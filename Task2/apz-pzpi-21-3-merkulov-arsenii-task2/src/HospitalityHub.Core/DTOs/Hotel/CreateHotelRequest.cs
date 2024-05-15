namespace HospitalityHub.Core.DTOs.Hotel;

public record CreateHotelRequest(
    string Name,
    string Address,
    string City,
    string Country,
    string ZipCode,
    string LockServiceUri
);