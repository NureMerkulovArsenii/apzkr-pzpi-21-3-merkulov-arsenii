/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StaffResponse } from '../../models/staff-response';

export interface ApiStaffStaffIdGet$Plain$Params {
  staffId: number;
}

export function apiStaffStaffIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<StaffResponse>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StaffResponse>;
    })
  );
}

apiStaffStaffIdGet$Plain.PATH = '/api/Staff/{staffId}';
