using HospitalityHub.BLL.Handlers.AccountManagement;
using HospitalityHub.Core.DTOs.Account;
using HospitalityHub.Core.Entities;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.Core.Extensions;
using HospitalityHub.Localization;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;

    public AccountController(
        UserManager<User> userManager,
        RoleManager<Role> roleManager)
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
    [HttpGet("users")]
    [ProducesResponseType<List<UserResponseDto>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetUsers()
    {
        var users = await _userManager.Users.Select(x => new UserResponseDto
            {
                Id = x.Id,
                Email = x.Email,
                FirstName = x.FirstName,
                LastName = x.LastName,
                PhoneNumber = x.PhoneNumber,
                EmailConfirmed = x.EmailConfirmed,
                TwoFactorEnabled = x.TwoFactorEnabled
            }
        ).ToListAsync();

        return Ok(users);
    }

    [Authorize(Roles = "Admin")]
    [HttpGet("users/{userId}")]
    [ProducesResponseType<UserResponseDto>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetUser(int userId)
    {
        var user = await _userManager.Users
            .Where(x => x.Id == userId)
            .FirstOrDefaultAsync();
        
        var roles = await _userManager.GetRolesAsync(user);

        var res = new UserResponseDto
        {
            Id = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            PhoneNumber = user.PhoneNumber,
            EmailConfirmed = user.EmailConfirmed,
            TwoFactorEnabled = user.TwoFactorEnabled,
            Roles = roles.ToList()
        };
        
        return Ok(res);
    }


    [Authorize(Roles = "Admin")]
    [HttpPatch("users/{userId}")]
    public async Task<IActionResult> UpdateUser(int userId, [FromBody] UpdateUserProfileRequest request)
    {
        var user = await _userManager.FindByIdAsync(userId.ToString());

        if (user == null)
            return BadRequest(Resources.Get("USER_NOT_FOUND"));

        user.FirstName = request.FirstName;
        user.LastName = request.LastName;
        user.PhoneNumber = request.PhoneNumber;

        var result = await _userManager.UpdateAsync(user);

        if (result.Succeeded)
            return Ok();

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }


    [Authorize(Roles = "Admin")]
    [HttpDelete("delete-user/{id:int}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var user = await _userManager.FindByIdAsync(id.ToString());

        if (user == null)
            return BadRequest(Resources.Get("USER_NOT_FOUND"));

        var result = await _userManager.DeleteAsync(user);

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