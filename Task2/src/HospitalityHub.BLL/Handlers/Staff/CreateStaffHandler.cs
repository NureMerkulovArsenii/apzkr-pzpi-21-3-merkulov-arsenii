using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.Core.Entities;
using HospitalityHub.Core.Exceptions;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Staff;

public class CreateStaffHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly UserManager<User> _userManager;

    public CreateStaffHandler(IUnitOfWork unitOfWork, UserManager<User> userManager)
    {
        _unitOfWork = unitOfWork;
        _userManager = userManager;
    }
    
    public async Task<int> HandleAsync(CreateStaffRequest request)
    {
        var userExists = await _userManager.Users.AnyAsync(x => x.Id == request.UserId);
        if (!userExists)
            throw new HospitalityHubException("User not found");
        
        var hotelExists = await _unitOfWork.HotelRepository.ExistAsync(x => x.Id == request.HotelId);
        if (!hotelExists)
            throw new HospitalityHubException("Hotel not found");
        
        var staff = new Core.Entities.Staff
        {
            FirstName = request.FirstName,
            SecondName = request.SecondName,
            LastName = request.LastName,
            Position = request.Position,
            UserId = request.UserId,
            HotelId = request.HotelId
        };

        await _unitOfWork.StaffRepository.AddAsync(staff);
        await _unitOfWork.SaveAsync();

        return staff.Id;
    }
    
}