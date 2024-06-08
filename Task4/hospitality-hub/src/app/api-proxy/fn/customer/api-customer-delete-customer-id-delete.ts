/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiCustomerDeleteCustomerIdDelete$Params {
  customerId: number;
}

export function apiCustomerDeleteCustomerIdDelete(http: HttpClient, rootUrl: string, params: ApiCustomerDeleteCustomerIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerDeleteCustomerIdDelete.PATH, 'delete');
  if (params) {
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

apiCustomerDeleteCustomerIdDelete.PATH = '/api/Customer/delete/{customerId}';
