using HospitalityHub.BLL.Handlers.Booking;
using HospitalityHub.Core.DTOs.Booking;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Authorize]
[Route("api/[controller]")]
public class BookingController : BaseApiController
{
    [HttpPost("create")]
    public async Task<IActionResult> CreateBooking([FromBody] CreateBookingRequest request)
    {
        await Resolve<CreateBookingHandler>().HandleAsync(request);

        return Ok();
    }


    [HttpPut("update")]
    public async Task<IActionResult> UpdateBooking([FromBody] UpdateBookingRequest request)
    {
        await Resolve<UpdateBookingHandler>().HandleAsync(request);

        return Ok();
    }
    

    [HttpDelete("cancel{customerId:int}/booking{bookingId:int}")]
    public async Task<IActionResult> CancelBooking([FromRoute] int customerId, [FromRoute] int bookingId)
    {
        await Resolve<CancelBookingHandler>().HandleAsync(customerId, bookingId);

        return Ok();
    }
    
    
    [HttpGet("filter")]
    [ProducesResponseType<IEnumerable<FilterBookingResponse>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> FilterBookings([FromQuery] FilterBookingRequest request)
    {
        var bookings = await Resolve<FilterBookingHandler>().HandleAsync(request);

        return Ok(bookings);
    }
    
    [HttpGet("{id:int}")]
    [ProducesResponseType<FilterBookingResponse>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetBooking(int id)
    {
        var booking = await Resolve<GetBookingHandler>().HandleAsync(id);

        return Ok(booking);
    }
    
    [HttpGet("checkin/{bookingId:int}/code/{code}/customer/{customerId:int}")]
    public async Task<IActionResult> CheckIn([FromRoute] int bookingId, string code, int customerId)
    {
        var res = await Resolve<CheckInHandler>().HandleAsync(customerId, bookingId, code);

        return Ok(res);
    }
    
    [HttpGet("checkout/{bookingId:int}/customer/{customerId:int}")]
    public async Task<IActionResult> CheckOut([FromRoute] int bookingId, int customerId)
    {
        var res = await Resolve<CheckOutHandler>().HandleAsync(customerId, bookingId);

        return Ok(res);
    }
    
}