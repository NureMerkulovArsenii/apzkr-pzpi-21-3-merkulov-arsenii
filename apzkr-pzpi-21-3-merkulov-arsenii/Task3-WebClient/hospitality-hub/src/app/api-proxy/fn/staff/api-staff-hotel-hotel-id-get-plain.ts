/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StaffResponse } from '../../models/staff-response';

export interface ApiStaffHotelHotelIdGet$Plain$Params {
  hotelId: number;
}

export function apiStaffHotelHotelIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiStaffHotelHotelIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StaffResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiStaffHotelHotelIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StaffResponse>>;
    })
  );
}

apiStaffHotelHotelIdGet$Plain.PATH = '/api/Staff/hotel/{hotelId}';
