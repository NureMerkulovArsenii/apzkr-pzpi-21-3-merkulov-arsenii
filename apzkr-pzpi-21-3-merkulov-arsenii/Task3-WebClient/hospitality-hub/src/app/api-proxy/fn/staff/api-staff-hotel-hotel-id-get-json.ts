/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StaffResponse } from '../../models/staff-response';

export interface ApiStaffHotelHotelIdGet$Json$Params {
  hotelId: number;
}

export function apiStaffHotelHotelIdGet$Json(http: HttpClient, rootUrl: string, params: ApiStaffHotelHotelIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StaffResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiStaffHotelHotelIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<StaffResponse>>;
    })
  );
}

apiStaffHotelHotelIdGet$Json.PATH = '/api/Staff/hotel/{hotelId}';
