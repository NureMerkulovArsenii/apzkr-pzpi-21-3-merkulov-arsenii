namespace HospitalityHub.Core.DTOs.Role;

public class UpsertRoleRequest
{
    public string RoleName { get; set; }

    public List<int> MenuItems { get; set; }
    
}