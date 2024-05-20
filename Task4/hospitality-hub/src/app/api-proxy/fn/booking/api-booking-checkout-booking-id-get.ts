/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiBookingCheckoutBookingIdGet$Params {
  bookingId: number;
}

export function apiBookingCheckoutBookingIdGet(http: HttpClient, rootUrl: string, params: ApiBookingCheckoutBookingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiBookingCheckoutBookingIdGet.PATH, 'get');
  if (params) {
    rb.path('bookingId', params.bookingId, {"style":"simple"});
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

apiBookingCheckoutBookingIdGet.PATH = '/api/Booking/checkout/{bookingId}';
