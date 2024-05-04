using HospitalityHub.BLL.Handlers.AccountManagement;
using HospitalityHub.Core.DTOs.Account;
using HospitalityHub.Core.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : BaseApiController
{
    [Authorize]
    [HttpPatch("update-profile")]
    public async Task<IActionResult> UpdateProfile([FromBody] UpdateUserProfileRequest request)
    {
        var result = await Resolve<UpdateUserProfileHandler>().HandleAsync(UserId, request);

        return Ok(result);
    }

    [HttpGet("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        await Resolve<SignInManager<User>>().SignOutAsync();

        return Ok();
    }
}