using HospitalityHub.BLL.Handlers.TodoTasks;
using HospitalityHub.Core.DTOs.TodoTasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize(Roles = "Admin,Manager,Staff")]
    public class StaffController : BaseApiController
    {
        [HttpPost("{staffId}/tasks/add")]
        public async Task<IActionResult> AddTask(int staffId, [FromBody] CreateTodoTaskRequest request)
        {
            await Resolve<AddTodoTaskHandler>().HandleAsync(staffId, request);

            return Ok();
        }
        
        [HttpPut("{staffId}/tasks/{todoTaskId}/complete")]
        public async Task<IActionResult> MarkCompleted(int staffId, int todoTaskId)
        {
            await Resolve<MarkCompletedTodoTaskHandler>().HandleAsync(staffId, todoTaskId);

            return Ok();
        }
        
        [HttpDelete("{staffId}/tasks/{todoTaskId}/remove")]
        public async Task<IActionResult> RemoveTask(int staffId, int todoTaskId)
        {
            await Resolve<RemoveTodoTaskHandler>().HandleAsync(staffId, todoTaskId);

            return Ok();
        }
        
        [HttpGet("{staffId}/tasks")]
        public async Task<IActionResult> GetTasks(int staffId)
        {
            var tasks = await Resolve<GetTodoTasksHandler>().HandleAsync(staffId);

            return Ok(tasks);
        }
        
        [HttpPut("{oldStaffId}/tasks/{todoTaskId}/reassign/{newStaffId}")]
        public async Task<IActionResult> ReassignTask(int oldStaffId, int todoTaskId, int newStaffId)
        {
            var res = await Resolve<ReassignTodoTaskHandler>().HandleAsync(todoTaskId, oldStaffId, newStaffId);

            return Ok(res);
        }
    }
}