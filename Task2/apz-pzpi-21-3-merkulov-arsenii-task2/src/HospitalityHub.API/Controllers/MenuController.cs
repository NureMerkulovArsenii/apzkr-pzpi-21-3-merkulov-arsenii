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
    
}