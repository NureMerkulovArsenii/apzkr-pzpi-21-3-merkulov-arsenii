using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Customer;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Customer;

public class GetCustomerHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GetCustomerHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<FilterCustomerResponse> HandleAsync(int customerId)
    {
        var customer = await _unitOfWork.CustomerRepository
            .FirstOrDefaultAsync(x => x.Id == customerId);

        if (customer == null)
            throw new Exception(Resources.Get("CUSTOMER_NOT_FOUND"));

        return new FilterCustomerResponse
        {
            Id = customer.Id,
            FirstName = customer.FirstName,
            LastName = customer.LastName,
            Email = customer.Email,
            Phone = customer.Phone
        };
    }
    
}
