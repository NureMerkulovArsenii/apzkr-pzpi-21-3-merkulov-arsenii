using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Account;
using HospitalityHub.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.AccountManagement;

public class UpdateUserProfileHandler : BaseHandler
{
    private readonly UserManager<User> _userManager;

    public UpdateUserProfileHandler(UserManager<User> userManager)
    {
        _userManager = userManager;
    }

    public async Task<bool> HandleAsync(int userId, UpdateUserProfileRequest request)
    {
        var res = await _userManager.Users.Where(u => u.Id == userId).ExecuteUpdateAsync(calls =>
            calls.SetProperty(user => user.FirstName, request.FirstName)
                .SetProperty(user => user.LastName, request.LastName)
                .SetProperty(user => user.PhoneNumber, request.PhoneNumber)
        );
    
        return res > 0;
    }
}