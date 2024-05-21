/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ERoomType } from '../../models/e-room-type';
import { FilterBookingResponse } from '../../models/filter-booking-response';

export interface ApiBookingFilterGet$Plain$Params {
  CheckIn?: string;
  CheckOut?: string;
  HotelId?: number;
  RoomType?: ERoomType;
}

export function apiBookingFilterGet$Plain(http: HttpClient, rootUrl: string, params?: ApiBookingFilterGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterBookingResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiBookingFilterGet$Plain.PATH, 'get');
  if (params) {
    rb.query('CheckIn', params.CheckIn, {"style":"form"});
    rb.query('CheckOut', params.CheckOut, {"style":"form"});
    rb.query('HotelId', params.HotelId, {"style":"form"});
    rb.query('RoomType', params.RoomType, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FilterBookingResponse>>;
    })
  );
}

apiBookingFilterGet$Plain.PATH = '/api/Booking/filter';
