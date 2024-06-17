using HospitalityHub.BLL.Handlers.DataAdministration;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DataAdministrationController : BaseApiController
{
    [HttpPost("backup-db")]
    public async Task<IActionResult> CreateDataBaseBackUp()
    {
        await Resolve<CreateDbBackupHandler>().HandleAsync();

        return Ok();
    }
    
}