using HospitalityHub.BLL.Handlers.Role;
using HospitalityHub.Core.DTOs.Account;
using HospitalityHub.Core.DTOs.Role;
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
public class RoleController : BaseApiController
{
    private readonly UserManager<User> _userManager;
    private readonly RoleManager<Role> _roleManager;

    public RoleController(UserManager<User> userManager, RoleManager<Role> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("assign-role")]
    public async Task<IActionResult> AssignRole([FromBody] AssignRoleRequest request)
    {
        var user = await _userManager.FindByEmailAsync(request.Email);
        var role = await _roleManager.FindByNameAsync(request.RoleName);

        if (user == null || role == null)
            return BadRequest();

        var result = await _userManager.AddToRoleAsync(user, role.Name);

        if (result.Succeeded)
            return Ok();

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
            return BadRequest();

        var result = await _userManager.RemoveFromRoleAsync(user, role.Name);

        if (result.Succeeded)
            return Ok();

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }

    [Authorize(Roles = "Admin")]
    [HttpPost("create-role")]
    public async Task<IActionResult> CreateRole([FromBody] UpsertRoleRequest request)
    {
        // var role = new Role(request.RoleName);
        //
        // var result = await _roleManager.CreateAsync(role);
        //
        // if (result.Succeeded)
        //     return Ok();
        //
        // throw new HospitalityHubException(result.Errors.Select(x => x.Description)
        //     .ToList().JoinBy("; "));

        await Resolve<CreateRoleHandler>().HandleAsync(request);

        return Ok();
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("delete-role")]
    public async Task<IActionResult> RemoveRole([FromBody] AddRoleRequest request)
    {
        var role = await _roleManager.FindByNameAsync(request.RoleName);

        if (role == null)
            return BadRequest("Role not found");

        var result = await _roleManager.DeleteAsync(role);

        if (result.Succeeded)
            return Ok();

        throw new HospitalityHubException(result.Errors.Select(x => x.Description)
            .ToList().JoinBy("; "));
    }


    [Authorize(Roles = "Admin")]
    [HttpGet("roles")]
    [ProducesResponseType<List<RecordResponseDto>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetRoles()
    {
        var roles = await _roleManager.Roles
            .Select(x => new RecordResponseDto(x.Id, x.Name))
            .ToListAsync();

        return Ok(roles);
    }


    [Authorize(Roles = "Admin")]
    [HttpGet("roles/{roleId:int}")]
    [ProducesResponseType<List<RecordResponseDto>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetRole(int roleId)
    {
        var roles = await _roleManager.Roles
            .Where(x => x.Id == roleId)
            .Select(x => new RecordResponseDto(x.Id, x.Name))
            .ToListAsync();

        return Ok(roles);
    }


    [Authorize(Roles = "Admin")]
    [HttpPatch("update-role/{id:int}")]
    public async Task<IActionResult> UpdateRole(int id, [FromBody] UpsertRoleRequest roleRequest)
    {
        // var role = await _roleManager.FindByIdAsync(id.ToString());
        //
        // if (role == null)
        //     return BadRequest(Resources.Get("ROLE_NOT_FOUND"));
        //
        // role.Name = roleRequest.RoleName;
        //
        // var result = await _roleManager.UpdateAsync(role);
        //
        // if (result.Succeeded)
        //     return Ok();
        //
        // throw new HospitalityHubException(result.Errors.Select(x => x.Description)
        //     .ToList().JoinBy("; "));

        await Resolve<UpdateRoleHandler>().HandleAsync(id, roleRequest);

        return Ok();
    }
}