using HospitalityHub.BLL.Handlers.Room;
using HospitalityHub.Core.DTOs.Room;
using HospitalityHub.Core.DTOs.RoomPlace;
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
    
    [HttpPost("{roomId}/roomplace/add")]
    public async Task<IActionResult> AddRoomPlace(int roomId, [FromBody] CreateRoomPlaceRequest request)
    {
        await Resolve<AddRoomPlaceHandler>().HandleAsync(roomId, request);

        return Ok();
    }

    [HttpDelete("{roomId}/roomplace/remove/{roomPlaceId}")]
    public async Task<IActionResult> RemoveRoomPlace(int roomId, int roomPlaceId)
    {
        await Resolve<RemoveRoomPlaceHandler>().HandleAsync(roomId, roomPlaceId);

        return Ok();
    }
    
    [HttpPut("{roomId:int}/roomplace/{roomPlaceId:int}/update")]
    public async Task<IActionResult> UpdateRoomPlace(int roomId, int roomPlaceId, [FromBody] UpdateRoomPlaceRequest request)
    {
        var res = await Resolve<UpdateRoomPlaceHandler>().HandleAsync(roomId, roomPlaceId, request);

        return Ok(res);
    }
    
}