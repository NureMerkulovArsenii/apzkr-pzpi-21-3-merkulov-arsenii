using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Customer;
using HospitalityHub.DAL.UnitOfWork;

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
        var customers = await _unitOfWork.CustomerRepository
            .GetByConditionAsync(x =>
                x.FirstName.Contains(filter)
                || x.LastName.Contains(filter)
                || x.Email.Contains(filter)
                || x.Phone.Contains(filter)
            );

        return customers.Select(x => new FilterCustomerResponse
        {
            Id = x.Id,
            FirstName = x.FirstName,
            LastName = x.LastName,
            Email = x.Email,
            Phone = x.Phone
        });
    }
}