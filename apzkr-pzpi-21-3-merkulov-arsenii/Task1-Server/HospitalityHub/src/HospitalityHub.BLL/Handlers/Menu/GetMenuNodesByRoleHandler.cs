using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Menu;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Menu;

public class GetMenuNodesByRoleHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetMenuNodesByRoleHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<MenuNodeResponse>> HandleAsync(int? roleId)
    {
        var menuNodes = await _unitOfWork.MenuItemsRepository
            .GetAll()
            .Select(x => new MenuNodeResponse
            {
                Id = x.Id,
                Icon = x.Icon,
                Title = x.Title,
                Url = x.Url
            })
            .ToListAsync();

        if (roleId == null)
            return menuNodes;

        var roleMenuNodes = await _unitOfWork.RoleRepository
            .GetAllByCondition(x => x.Id == roleId)
            .SelectMany(x => x.MenuItems)
            .Select(x => x.Id)
            .ToListAsync();
        
        foreach (var menuNode in menuNodes.Where(menuNode => roleMenuNodes.Contains(menuNode.Id)))
        {
            menuNode.IsSelected = true;
        }

        return menuNodes;
    }
}