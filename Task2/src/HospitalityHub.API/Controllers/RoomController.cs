using HospitalityHub.BLL.Handlers.Room;
using HospitalityHub.Core.DTOs.Room;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomController : BaseApiController
{
    
    [HttpGet("{id}")]
    public async Task<IActionResult> GetRoom(int id)
    {
        var room = await Resolve<GetRoomHandler>().HandleAsync(id);

        return Ok(room);
    }
    
    [HttpPost("create")]
    public async Task<IActionResult> CreateRoom([FromBody] CreateRoomRequest request)
    {
        await Resolve<CreateRoomHandler>().HandleAsync(request);

        return Ok();
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateRoom([FromBody] UpdateRoomRequest request)
    {
        await Resolve<UpdateRoomHandler>().HandleAsync(request);

        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteRoom(int id)
    {
        await Resolve<DeleteRoomHandler>().HandleAsync(id);

        return Ok();
    }
}