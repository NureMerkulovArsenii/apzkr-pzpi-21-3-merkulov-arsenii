using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Menu;
using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.UnitOfWork;

namespace HospitalityHub.BLL.Handlers.Menu;

public class GetMenuNodesHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetMenuNodesHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<MenuNodeResponse>> HandleAsync(int userId)
    {
        FormattableString sqlQuery = @$"
        select ""MenuItems"".*
            from ""MenuItems""
                     JOIN ""MenuItemRole"" ON ""MenuItemRole"".""MenuItemsId"" = ""MenuItems"".""Id""
                     JOIN ""AspNetUserRoles"" ON ""AspNetUserRoles"".""RoleId"" = ""MenuItemRole"".""RolesId""
                     JOIN public.""AspNetUsers"" ANU on ANU.""Id"" = ""AspNetUserRoles"".""UserId""
            where ANU.""Id"" = {userId}";

        var result = await _unitOfWork.SqlRawQueryAsync<MenuItem>(sqlQuery);

        var menuItems = result.Select(x => new MenuNodeResponse
        {
            Id = x.Id,
            Title = x.Title,
            Url = x.Url,
            Icon = x.Icon
        });


        return menuItems;
    }
}