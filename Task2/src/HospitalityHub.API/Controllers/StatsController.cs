using HospitalityHub.BLL.Handlers.Stats;
using HospitalityHub.Core.DTOs.Stats;
using Microsoft.AspNetCore.Mvc;

namespace HospitalityHub.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StatsController : BaseApiController
{
    [HttpPost("occupancy-report/{hotelId:int}/")]
    public async Task<IActionResult> GetOccupancyReport(int hotelId, [FromBody] ReportTimeBoundaryRequest request)
    {
        var report = await Resolve<GenerateOccupancyReportHandler>()
            .HandleAsync(hotelId, request.DateFrom, request.DateTo);

        return Ok(report);
    }
}