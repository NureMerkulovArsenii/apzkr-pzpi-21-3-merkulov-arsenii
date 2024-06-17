using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;

namespace HospitalityHub.BLL.Handlers.Customer;

public class DeleteCustomerHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public DeleteCustomerHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int customerId)
    {
        var customer = await _unitOfWork.CustomerRepository
            .FirstOrDefaultAsync(x => x.Id == customerId);

        if (customer == null)
            throw new Exception(Resources.Get("CUSTOMER_NOT_FOUND"));

        await _unitOfWork.CustomerRepository.ExecuteDeleteAsync(x => x.Id == customerId);
    }
}
