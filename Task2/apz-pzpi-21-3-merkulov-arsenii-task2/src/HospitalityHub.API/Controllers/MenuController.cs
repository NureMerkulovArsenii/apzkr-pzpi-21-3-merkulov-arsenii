using HospitalityHub.BLL.Handlers.Menu;
using HospitalityHub.Core.DTOs.Menu;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class MenuController : BaseApiController
{
    [HttpGet("menu-nodes")]
    [ProducesResponseType<IEnumerable<MenuNodeResponse>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetMenuNodes()
    {
        var menuNodes = await Resolve<GetMenuNodesHandler>().HandleAsync(UserId);

        return Ok(menuNodes);
    }
    
    [HttpGet("menu-nodes/{roleId:int}")]
    [ProducesResponseType<IEnumerable<MenuNodeResponse>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetMenuNodesByRole(int? roleId)
    {
        var menuNodes = await Resolve<GetMenuNodesByRoleHandler>().HandleAsync(roleId);

        return Ok(menuNodes);
    }
    
}