using HospitalityHub.BLL.Handlers.AccountManagement;
using HospitalityHub.Core;
using HospitalityHub.Core.DTOs.Account;
using HospitalityHub.Core.Entities;
using HospitalityHub.Core.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<IdentityRole<int>> _roleManager;

    public AccountController(UserManager<User> userManager, RoleManager<IdentityRole<int>> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }


    [Authorize]
    [HttpPatch("update-profile")]
    public async Task<IActionResult> UpdateProfile([FromBody] UpdateUserProfileRequest request)
    {
        var result = await Resolve<UpdateUserProfileHandler>().HandleAsync(UserId, request);

        return Ok(result);
    }


    [Authorize(Roles = "Admin")]
    [HttpPost("assign-role")]
    public async Task<IActionResult> AssignRole([FromBody] AssignRoleRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        var role = await _roleManager.FindByNameAsync(request.RoleName);

        if (user == null || role == null)
        {
            return BadRequest();
        }

        var result = await _userManager.AddToRoleAsync(user, role.Name);

        if (result.Succeeded)
        {
            return Ok();
        }

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("remove-role")]
    public async Task<IActionResult> RemoveRole([FromBody] AssignRoleRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        var role = await _roleManager.FindByNameAsync(request.RoleName);

        if (user == null || role == null)
        {
            return BadRequest();
        }

        var result = await _userManager.RemoveFromRoleAsync(user, role.Name);

        if (result.Succeeded)
        {
            return Ok();
        }

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("add-role")]
    public async Task<IActionResult> AddRole([FromBody] AddRoleRequest request)
    {
        var role = new IdentityRole<int>(request.RoleName);

        var result = await _roleManager.CreateAsync(role);

        if (result.Succeeded)
        {
            return Ok();
        }

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("delete-role")]
    public async Task<IActionResult> RemoveRole([FromBody] AddRoleRequest request)
    {
        var role = await _roleManager.FindByNameAsync(request.RoleName);

        if (role == null)
        {
            return BadRequest();
        }

        var result = await _roleManager.DeleteAsync(role);

        if (result.Succeeded)
        {
            return Ok();
        }

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }


    [Authorize]
    [HttpGet("logout")]
    public async Task<IActionResult> Logout()
    {
        await Resolve<SignInManager<User>>().SignOutAsync();

        return Ok();
    }
}