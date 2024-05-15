using HospitalityHub.Core.Enums;

namespace HospitalityHub.Core.DTOs.Stats;

public class OccupancyReportResult
{
    public DateTime GenerationDate { get; set; }

    public DateTime DateFrom { get; set; }

    public DateTime DateTo { get; set; }

    public int TotalRooms { get; set; }

    public int TotalBookings { get; set; }

    public decimal TotalIncome { get; set; }

    public int TotalGuests { get; set; }

    public decimal AverageIncomePerBooking { get; set; }

    public decimal AverageGuestsPerBooking { get; set; }

    public decimal AverageIncomePerGuest { get; set; }
    
    public decimal AverageIncomePerDay { get; set; }
    
    public string MostProfitableRoomType { get; set; }
    
    public decimal MostProfitableRoomTypeIncome { get; set; }
}