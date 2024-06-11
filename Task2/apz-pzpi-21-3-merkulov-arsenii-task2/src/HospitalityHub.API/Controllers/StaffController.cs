using HospitalityHub.BLL.Handlers.Staff;
using HospitalityHub.BLL.Handlers.TodoTasks;
using HospitalityHub.Core.DTOs.Staff;
using HospitalityHub.Core.DTOs.TodoTasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "Admin,Manager,Staff")]
    public class StaffController : BaseApiController
    {
        [HttpGet("hotel/{hotelId}")]
        [ProducesResponseType<List<StaffResponse>>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetStaffByHotel(int hotelId)
        {
            var staff = await Resolve<GetStaffByHotelHandler>().HandleAsync(hotelId);

            return Ok(staff);
        }
        
        
        [HttpGet("{staffId}")]
        [ProducesResponseType<StaffDetailedResponseDto>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetStaff(int staffId)
        {
            var staff = await Resolve<GetStaffHandler>().HandleAsync(staffId);

            return Ok(staff);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateStaff([FromBody] UpsertStaffRequest request)
        {
            await Resolve<CreateStaffHandler>().HandleAsync(request);

            return Ok();
        }

        [HttpPut("{staffId}/update")]
        public async Task<IActionResult> UpdateStaff(int staffId, [FromBody] UpsertStaffRequest request)
        {
            await Resolve<UpdateStaffHandler>().HandleAsync(staffId, request);

            return Ok();
        }

        [HttpDelete("{staffId}/remove")]
        public async Task<IActionResult> RemoveStaff(int staffId)
        {
            await Resolve<RemoveStaffHandler>().HandleAsync(staffId);

            return Ok();
        }


        [HttpPost("{staffId}/tasks/add")]
        public async Task<IActionResult> AddTask(int staffId, [FromBody] CreateTodoTaskRequest request)
        {
            await Resolve<AddTodoTaskHandler>().HandleAsync(staffId, request);

            return Ok();
        }

        [HttpPut("{staffId}/tasks/{todoTaskId}/update")]
        public async Task<IActionResult> UpdateTask(int staffId, int todoTaskId,
            [FromBody] UpdateTodoTaskRequest request)
        {
            await Resolve<UpdateTodoTaskHandler>().HandleAsync(staffId, todoTaskId, request);

            return Ok();
        }


        [HttpPut("{staffId}/tasks/{todoTaskId}/finish")]
        public async Task<IActionResult> MarkCompleted(int staffId, int todoTaskId, [FromQuery] bool isCompleted)
        {
            await Resolve<MarkFinishedTodoTaskHandler>().HandleAsync(staffId, todoTaskId, isCompleted);

            return Ok();
        }


        [HttpDelete("{staffId}/tasks/{todoTaskId}/remove")]
        public async Task<IActionResult> RemoveTask(int staffId, int todoTaskId)
        {
            await Resolve<RemoveTodoTaskHandler>().HandleAsync(staffId, todoTaskId);

            return Ok();
        }

        [HttpGet("{staffId}/tasks")]
        [ProducesResponseType<List<TodoTasksResponse>>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetTasks(int staffId)
        {
            var tasks = await Resolve<GetTodoTasksHandler>().HandleAsync(staffId);

            return Ok(tasks);
        }
        
        [HttpGet("todoTask/{todoTaskId:int}")]
        [ProducesResponseType<TodoTasksResponse>(StatusCodes.Status200OK)]
        public async Task<IActionResult> GetTask(int todoTaskId)
        {
            var task = await Resolve<GetTodoTaskHandler>().HandleAsync(todoTaskId);

            return Ok(task);
        }

        [HttpPut("{oldStaffId}/tasks/{todoTaskId}/reassign/{newStaffId}")]
        public async Task<IActionResult> ReassignTask(int oldStaffId, int todoTaskId, int newStaffId)
        {
            var res = await Resolve<ReassignTodoTaskHandler>().HandleAsync(todoTaskId, oldStaffId, newStaffId);

            return Ok(res);
        }
    }
}