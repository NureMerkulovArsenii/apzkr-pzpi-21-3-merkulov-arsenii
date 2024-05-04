using System.Diagnostics;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

public class BaseApiController : ControllerBase
{
    protected int UserId => Convert.ToInt32(User.FindFirstValue(ClaimTypes.NameIdentifier));

    [DebuggerStepThrough]
    protected TService Resolve<TService>()
    {
        return HttpContext.RequestServices.GetRequiredService<TService>();
    }
}