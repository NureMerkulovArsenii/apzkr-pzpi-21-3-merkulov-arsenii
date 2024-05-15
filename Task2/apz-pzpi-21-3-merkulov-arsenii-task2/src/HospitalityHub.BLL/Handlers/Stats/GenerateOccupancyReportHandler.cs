using HospitalityHub.BLL.Handlers.Base;
using HospitalityHub.Core.DTOs.Stats;
using HospitalityHub.Core.Extensions;
using HospitalityHub.DAL.UnitOfWork;
using Microsoft.EntityFrameworkCore;

namespace HospitalityHub.BLL.Handlers.Stats;

public class GenerateOccupancyReportHandler : BaseHandler
{
    private readonly IUnitOfWork _unitOfWork;

    public GenerateOccupancyReportHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<List<OccupancyReportResult>> HandleAsync(int hotelId, DateTime dateFrom, DateTime dateTo)
    {
        var res = new List<OccupancyReportResult>();

        for (var dt = dateFrom; dt <= dateTo; dt = dt.AddMonths(1))
        {
            var endOfMonth = new DateTime(dt.Year, dt.Month, DateTime.DaysInMonth(dt.Year, dt.Month));

            if (endOfMonth > dateTo)
            {
                endOfMonth = dateTo;
            }

            var monthlyReport = await GetMonthOccupancyStats(hotelId, dt, endOfMonth);
            res.Add(monthlyReport);
        }

        return res;
    }

    /// <summary>
    /// Generate report for 1 month period with most important stats for room occupancy, income and guests
    /// </summary>
    private async Task<OccupancyReportResult> GetMonthOccupancyStats(int hotelId, DateTime dateFrom, DateTime dateTo)
    {
        var bookings = await _unitOfWork.BookingRepository
            .GetAll()
            .Where(x => x.Room.HotelId == hotelId && x.CheckInBooking >= dateFrom && x.CheckOutBooking <= dateTo)
            .Select(x => new
            {
                x.CheckInBooking,
                x.CheckOutBooking,
                x.Room.Number,
                x.TotalPrice,
                x.TotalDiscountPercent,
                x.Room.RoomType,
                RoomPlaces = x.Room.RoomPlaces.Select(x => x.Type.GetDescription()).ToList().JoinBy(", "),
                x.Customer.Bookings.Count,
                x.NumberOfAdults,
                x.NumberOfChildren,
                x.Customer.DateCreated,
            })
            .ToListAsync();

        var totalIncome = bookings.Sum(x => x.TotalPrice);
        var totalGuests = bookings.Sum(x => x.NumberOfAdults + x.NumberOfChildren);
        var totalRooms = bookings.Select(x => x.Number).Distinct().Count();
        var mostProfitableRoom = bookings.GroupBy(x => x.RoomType)
            .Select(x => new
            {
                RoomType = x.Key,
                TotalIncome = x.Sum(x => x.TotalPrice),
            }).MaxBy(x => x.TotalIncome);

        var roomType = mostProfitableRoom.RoomType.GetDescription();
        var totalIncomePerRoomType = mostProfitableRoom.TotalIncome;

        var res = new OccupancyReportResult
        {
            DateFrom = dateFrom,
            DateTo = dateTo,
            GenerationDate = DateTime.Now,
            TotalIncome = totalIncome,
            TotalGuests = totalGuests,
            TotalBookings = bookings.Count,
            TotalRooms = totalRooms,
            AverageIncomePerBooking = totalIncome / bookings.Count,
            AverageGuestsPerBooking = totalGuests / bookings.Count,
            AverageIncomePerGuest = totalIncome / totalGuests,
            AverageIncomePerDay = totalIncome / (dateTo - dateFrom).Days,
            MostProfitableRoomType = roomType,
            MostProfitableRoomTypeIncome = totalIncomePerRoomType,
        };

        return res;
    }
}