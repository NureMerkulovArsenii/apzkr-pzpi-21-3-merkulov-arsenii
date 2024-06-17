/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterCustomerResponse } from '../../models/filter-customer-response';

export interface ApiCustomerFilterGet$Plain$Params {
  searchRequest?: string;
}

export function apiCustomerFilterGet$Plain(http: HttpClient, rootUrl: string, params?: ApiCustomerFilterGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterCustomerResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerFilterGet$Plain.PATH, 'get');
  if (params) {
    rb.query('searchRequest', params.searchRequest, {"style":"form"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<FilterCustomerResponse>>;
    })
  );
}

apiCustomerFilterGet$Plain.PATH = '/api/Customer/filter';
