/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiBookingCheckoutBookingIdCustomerCustomerIdGet$Params {
  bookingId: number;
  customerId: number;
}

export function apiBookingCheckoutBookingIdCustomerCustomerIdGet(http: HttpClient, rootUrl: string, params: ApiBookingCheckoutBookingIdCustomerCustomerIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiBookingCheckoutBookingIdCustomerCustomerIdGet.PATH, 'get');
  if (params) {
    rb.path('bookingId', params.bookingId, {"style":"simple"});
    rb.path('customerId', params.customerId, {"style":"simple"});
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

apiBookingCheckoutBookingIdCustomerCustomerIdGet.PATH = '/api/Booking/checkout/{bookingId}/customer/{customerId}';
