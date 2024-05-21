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
        await Resolve<CreateBookingHandler>().HandleAsync(UserId, request);

        return Ok();
    }


    [HttpPut("update")]
    public async Task<IActionResult> UpdateBooking([FromBody] UpdateBookingRequest request)
    {
        await Resolve<UpdateBookingHandler>().HandleAsync(UserId, request);

        return Ok();
    }
    

    [HttpDelete("cancel/{id:int}")]
    public async Task<IActionResult> CancelBooking(int id)
    {
        await Resolve<CancelBookingHandler>().HandleAsync(UserId, id);

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
    
    [HttpGet("checkin/{bookingId:int}/code/{code}")]
    public async Task<IActionResult> CheckIn([FromRoute] int bookingId, string code)
    {
        var res = await Resolve<CheckInHandler>().HandleAsync(UserId, bookingId, code);

        return Ok(res);
    }
    
    [HttpGet("checkout/{bookingId:int}")]
    public async Task<IActionResult> CheckOut([FromRoute] int bookingId)
    {
        var res = await Resolve<CheckOutHandler>().HandleAsync(UserId, bookingId);

        return Ok(res);
    }
    
}