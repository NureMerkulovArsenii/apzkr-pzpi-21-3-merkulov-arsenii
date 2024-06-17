/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterCustomerResponse } from '../../models/filter-customer-response';

export interface ApiCustomerIdGet$Plain$Params {
  id: number;
}

export function apiCustomerIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiCustomerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterCustomerResponse>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FilterCustomerResponse>;
    })
  );
}

apiCustomerIdGet$Plain.PATH = '/api/Customer/{id}';
