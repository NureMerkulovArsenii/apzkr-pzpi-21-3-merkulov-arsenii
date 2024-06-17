/* tslint:disable */
/* eslint-disable */
export interface OccupancyReportResult {
  averageGuestsPerBooking?: number;
  averageIncomePerBooking?: number;
  averageIncomePerDay?: number;
  averageIncomePerGuest?: number;
  dateFrom?: string;
  dateTo?: string;
  generationDate?: string;
  mostProfitableRoomType?: string | null;
  mostProfitableRoomTypeIncome?: number;
  totalBookings?: number;
  totalGuests?: number;
  totalIncome?: number;
  totalRooms?: number;
}
