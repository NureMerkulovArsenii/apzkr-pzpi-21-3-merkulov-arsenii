using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Customer;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Customer;

public class FilterCustomerHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public FilterCustomerHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<IEnumerable<FilterCustomerResponse>> HandleAsync(string filter)
    {
        var customersQuery = _unitOfWork.CustomerRepository.GetAll();

        if (!string.IsNullOrEmpty(filter))
        {
            customersQuery = customersQuery.Where(x =>
                x.FirstName.Contains(filter)
                || x.LastName.Contains(filter)
                || x.Email.Contains(filter)
                || x.Phone.Contains(filter)
            );
        }

        var result = await customersQuery.Select(x => new FilterCustomerResponse
        {
            Id = x.Id,
            FirstName = x.FirstName,
            LastName = x.LastName,
            Email = x.Email,
            Phone = x.Phone
        }).ToListAsync();

        return result;
    }
}