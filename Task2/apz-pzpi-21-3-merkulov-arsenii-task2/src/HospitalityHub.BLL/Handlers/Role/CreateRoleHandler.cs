using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Role;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Role;

public class CreateRoleHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateRoleHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(UpsertRoleRequest request)
    {
        var role = new Core.Entities.Role
        {
            Name = request.RoleName,
            NormalizedName = request.RoleName.ToUpperInvariant(),
            MenuItems = await _unitOfWork.MenuItemsRepository
                .GetAllByCondition(x => request.MenuItems.Contains(x.Id))
                .ToListAsync()
        };

        await _unitOfWork.RoleRepository.AddAsync(role);
        await _unitOfWork.SaveAsync();
    }
    
}