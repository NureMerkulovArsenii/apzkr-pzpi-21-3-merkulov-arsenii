/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterBookingResponse } from '../../models/filter-booking-response';

export interface ApiBookingIdGet$Json$Params {
  id: number;
}

export function apiBookingIdGet$Json(http: HttpClient, rootUrl: string, params: ApiBookingIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterBookingResponse>> {
  const rb = new RequestBuilder(rootUrl, apiBookingIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FilterBookingResponse>;
    })
  );
}

apiBookingIdGet$Json.PATH = '/api/Booking/{id}';
