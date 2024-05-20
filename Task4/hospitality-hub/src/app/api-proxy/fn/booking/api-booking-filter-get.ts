/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ERoomType } from '../../models/e-room-type';

export interface ApiBookingFilterGet$Params {
  CheckIn?: string;
  CheckOut?: string;
  HotelId?: number;
  RoomType?: ERoomType;
}

export function apiBookingFilterGet(http: HttpClient, rootUrl: string, params?: ApiBookingFilterGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiBookingFilterGet.PATH, 'get');
  if (params) {
    rb.query('CheckIn', params.CheckIn, {"style":"form"});
    rb.query('CheckOut', params.CheckOut, {"style":"form"});
    rb.query('HotelId', params.HotelId, {"style":"form"});
    rb.query('RoomType', params.RoomType, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

apiBookingFilterGet.PATH = '/api/Booking/filter';
