using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Staff;

public class GetStaffByHotelHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetStaffByHotelHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<List<StaffResponse>> HandleAsync(int hotelId)
    {
        var staffList = await _unitOfWork.StaffRepository
            .GetAllByCondition(x => x.HotelId == hotelId)
            .Select(x => new StaffResponse
            {
                Id = x.Id,
                UserId = x.UserId,
                UserFullName = x.LastName + " " + x.FirstName + " " + x.SecondName,
                UserEmail = x.User.Email,
                ActiveTasksCount = x.TodoTasks.Count(x => !x.IsFinished),
                Position = x.Position
            })
            .ToListAsync();

        return staffList;
    }
}