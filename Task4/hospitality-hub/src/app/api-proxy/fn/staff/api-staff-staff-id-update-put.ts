/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateStaffRequest } from '../../models/update-staff-request';

export interface ApiStaffStaffIdUpdatePut$Params {
  staffId: number;
      body?: UpdateStaffRequest
}

export function apiStaffStaffIdUpdatePut(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdUpdatePut.PATH, 'put');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
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

apiStaffStaffIdUpdatePut.PATH = '/api/Staff/{staffId}/update';
