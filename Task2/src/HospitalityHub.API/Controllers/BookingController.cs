using HospitalityHub.BLL.Handlers.Booking;
using HospitalityHub.Core.DTOs.Booking;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
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
    public async Task<IActionResult> FilterBookings([FromQuery] FilterBookingRequest request)
    {
        var bookings = await Resolve<FilterBookingHandler>().HandleAsync(request);

        return Ok(bookings);
    }
    
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetBooking(int id)
    {
        var booking = await Resolve<GetBookingHandler>().HandleAsync(id);

        return Ok(booking);
    }
    
    [HttpGet("checkin/{bookingId:int}")]
    public async Task<IActionResult> CheckIn([FromQuery] int bookingId)
    {
        var res = await Resolve<CheckInHandler>().HandleAsync(UserId, bookingId);

        return Ok(res);
    }
    
    [HttpGet("checkout/{bookingId:int}")]
    public async Task<IActionResult> CheckOut([FromQuery] int bookingId)
    {
        var res = await Resolve<CheckOutHandler>().HandleAsync(UserId, bookingId);

        return Ok(res);
    }
    
}