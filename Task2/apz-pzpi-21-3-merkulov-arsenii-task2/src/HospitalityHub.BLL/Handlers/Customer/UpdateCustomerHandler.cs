using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Customer;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Customer;

public class UpdateCustomerHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public UpdateCustomerHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int customerId, UpsertCustomerRequest request)
    {
        var customer = await _unitOfWork.CustomerRepository
            .FirstOrDefaultAsync(x => x.Id == customerId);

        if (customer == null)
            throw new Exception(Resources.Get("CUSTOMER_NOT_FOUND"));

        customer.FirstName = request.FirstName;
        customer.LastName = request.LastName;
        customer.Email = request.Email;
        customer.Phone = request.Phone;

        await _unitOfWork.SaveAsync();
    }
}