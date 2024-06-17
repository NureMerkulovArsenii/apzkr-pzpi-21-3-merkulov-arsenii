/* tslint:disable */
/* eslint-disable */
import { ERoomStatus } from '../models/e-room-status';
import { ERoomType } from '../models/e-room-type';
export interface UpdateRoomRequest {
  apiKey?: string | null;
  baseLockUri?: string | null;
  basePrice?: number;
  discountPercent?: number;
  hotelId?: number;
  id?: number;
  number?: number;
  roomType?: ERoomType;
  stage?: number;
  status?: ERoomStatus;
}
