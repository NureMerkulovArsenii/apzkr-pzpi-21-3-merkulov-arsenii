/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiBookingCheckinBookingIdCodeCodeGet$Params {
  bookingId: number;
  code: string;
}

export function apiBookingCheckinBookingIdCodeCodeGet(http: HttpClient, rootUrl: string, params: ApiBookingCheckinBookingIdCodeCodeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiBookingCheckinBookingIdCodeCodeGet.PATH, 'get');
  if (params) {
    rb.path('bookingId', params.bookingId, {"style":"simple"});
    rb.path('code', params.code, {"style":"simple"});
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

apiBookingCheckinBookingIdCodeCodeGet.PATH = '/api/Booking/checkin/{bookingId}/code/{code}';
