using HospitalityHub.BLL.Handlers.Hotel;
using HospitalityHub.Core.DTOs.Hotel;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HotelController : BaseApiController
{
    [HttpPost("create")]
    public async Task<IActionResult> CreateHotel([FromBody] CreateHotelRequest request)
    {
        await Resolve<CreateHotelHandler>().HandleAsync(request);

        return Ok();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetHotel(int id)
    {
        var hotel = await Resolve<GetHotelHandler>().HandleAsync(id);

        return Ok(hotel);
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateHotel([FromBody] UpdateHotelRequest request)
    {
        await Resolve<UpdateHotelHandler>().HandleAsync(request);

        return Ok();
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteHotel(int id)
    {
        await Resolve<DeleteHotelHandler>().HandleAsync(id);

        return Ok();
    }
}