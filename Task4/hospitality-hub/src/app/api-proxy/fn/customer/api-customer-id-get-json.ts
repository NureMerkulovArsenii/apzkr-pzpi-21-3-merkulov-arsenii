/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FilterCustomerResponse } from '../../models/filter-customer-response';

export interface ApiCustomerIdGet$Json$Params {
  id: number;
}

export function apiCustomerIdGet$Json(http: HttpClient, rootUrl: string, params: ApiCustomerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterCustomerResponse>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FilterCustomerResponse>;
    })
  );
}

apiCustomerIdGet$Json.PATH = '/api/Customer/{id}';
