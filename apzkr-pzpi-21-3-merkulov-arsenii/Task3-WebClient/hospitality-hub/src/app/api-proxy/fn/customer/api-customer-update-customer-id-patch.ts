/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpsertCustomerRequest } from '../../models/upsert-customer-request';

export interface ApiCustomerUpdateCustomerIdPatch$Params {
  customerId: number;
      body?: UpsertCustomerRequest
}

export function apiCustomerUpdateCustomerIdPatch(http: HttpClient, rootUrl: string, params: ApiCustomerUpdateCustomerIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiCustomerUpdateCustomerIdPatch.PATH, 'patch');
  if (params) {
    rb.path('customerId', params.customerId, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
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

apiCustomerUpdateCustomerIdPatch.PATH = '/api/Customer/update/{customerId}';
