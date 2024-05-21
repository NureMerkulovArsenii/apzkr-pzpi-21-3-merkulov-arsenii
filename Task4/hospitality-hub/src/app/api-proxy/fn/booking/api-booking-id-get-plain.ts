/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterBookingResponse } from '../../models/filter-booking-response';

export interface ApiBookingIdGet$Plain$Params {
  id: number;
}

export function apiBookingIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiBookingIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterBookingResponse>> {
  const rb = new RequestBuilder(rootUrl, apiBookingIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FilterBookingResponse>;
    })
  );
}

apiBookingIdGet$Plain.PATH = '/api/Booking/{id}';
