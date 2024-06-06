using HospitalityHub.BLL.Handlers.Customer;
using HospitalityHub.Core.DTOs.Customer;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

public class CustomerController : BaseApiController
{
    [HttpPost("create")]
    public async Task<IActionResult> CreateCustomer([FromBody] UpsertCustomerRequest request)
    {
        await Resolve<CreateCustomerHandler>().HandleAsync(UserId, request);

        return Ok();
    }

    [HttpPatch("update/{customerId:int}")]
    public async Task<IActionResult> UpdateCustomer([FromRoute] int customerId, [FromBody] UpsertCustomerRequest request)
    {
        await Resolve<UpdateCustomerHandler>().HandleAsync(customerId, request);

        return Ok();
    }

    [HttpDelete("delete/{customerId:int}")]
    public async Task<IActionResult> DeleteCustomer(int customerId)
    {
        await Resolve<DeleteCustomerHandler>().HandleAsync(customerId);

        return Ok();
    }

    [HttpGet("filter")]
    [ProducesResponseType<IEnumerable<FilterCustomerResponse>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> FilterCustomers([FromQuery] string searchRequest)
    {
        var customers = await Resolve<FilterCustomerHandler>().HandleAsync(searchRequest);

        return Ok(customers);
    }

    [HttpGet("{id:int}")]
    [ProducesResponseType<FilterCustomerResponse>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetCustomer(int id)
    {
        var customer = await Resolve<GetCustomerHandler>().HandleAsync(id);

        return Ok(customer);
    }
    
}