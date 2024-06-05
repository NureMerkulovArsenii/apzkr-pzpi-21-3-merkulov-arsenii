using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Role;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Role;

public class UpdateRoleHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateRoleHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }
    
    public async Task HandleAsync(int roleId, UpsertRoleRequest request)
    {
        var role = await _unitOfWork.RoleRepository.GetByIdAsync(roleId);

        if (role == null)
            throw new Exception(Resources.Get("ROLE_NOT_FOUND"));

        role.Name = request.RoleName;
        role.NormalizedName = request.RoleName.ToUpperInvariant();

        var menuItems = await _unitOfWork.MenuItemsRepository
            .GetAllByCondition(x => request.MenuItems.Contains(x.Id))
            .ToListAsync();

        role.MenuItems = menuItems;

        await _unitOfWork.SaveAsync();
    }
    
}