using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Customer;
using HospitalityHub.Core.Entities;
using HospitalityHub.DAL.UnitOfWork;
using HospitalityHub.Localization;
using Microsoft.AspNetCore.Identity;

namespace HospitalityHub.BLL.Handlers.Customer;

public class CreateCustomerHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public CreateCustomerHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task HandleAsync(int userId, UpsertCustomerRequest request)
    {
        var customer = await _unitOfWork.CustomerRepository
            .FirstOrDefaultAsync(x => x.Email == request.Email);

        if (customer != null)
            throw new Exception(Resources.Get("CUSTOMER_ALREADY_EXISTS"));
        
        customer = new Core.Entities.Customer()
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            Phone = request.Phone,
            IsEnabled = true
        };

        await _unitOfWork.CustomerRepository.AddAsync(customer);
        await _unitOfWork.SaveAsync();
    }
}