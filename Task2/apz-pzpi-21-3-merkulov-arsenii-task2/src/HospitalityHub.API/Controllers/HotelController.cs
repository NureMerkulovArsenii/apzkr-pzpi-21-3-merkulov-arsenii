using HospitalityHub.BLL.Handlers.Hotel;
using HospitalityHub.Core.DTOs.Hotel;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HotelController : BaseApiController
{
    [HttpGet]
    [ProducesResponseType<IEnumerable<HotelResponse>>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetHotels()
    {
        var hotels = await Resolve<GetHotelsListHandler>().HandleAsync();

        return Ok(hotels);
    }
    
    [HttpGet("{id}")]
    [ProducesResponseType<HotelResponse>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetHotel(int id)
    {
        var hotel = await Resolve<GetHotelHandler>().HandleAsync(id);

        return Ok(hotel);
    }


    [HttpPost("create")]
    public async Task<IActionResult> CreateHotel([FromBody] CreateHotelRequest request)
    {
        await Resolve<CreateHotelHandler>().HandleAsync(request);

        return Ok();
    }


    [HttpPut("update/{id}")]
    public async Task<IActionResult> UpdateHotel(int id, [FromBody] UpdateHotelRequest request)
    {
        await Resolve<UpdateHotelHandler>().HandleAsync(id, request);

        return Ok();
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteHotel(int id)
    {
        await Resolve<DeleteHotelHandler>().HandleAsync(id);

        return Ok();
    }
}