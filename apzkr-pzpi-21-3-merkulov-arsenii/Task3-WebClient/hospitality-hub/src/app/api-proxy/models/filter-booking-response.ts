/* tslint:disable */
/* eslint-disable */
import { ERoomType } from '../models/e-room-type';
export interface FilterBookingResponse {
  bookingId?: number;
  checkIn?: string;
  checkOut?: string;
  customerId?: number;
  isPaid?: boolean;
  numberOfAdults?: number;
  numberOfChildren?: number;
  roomId?: number;
  roomType?: ERoomType;
  totalDiscountPercent?: number;
  totalPrice?: number;
}
