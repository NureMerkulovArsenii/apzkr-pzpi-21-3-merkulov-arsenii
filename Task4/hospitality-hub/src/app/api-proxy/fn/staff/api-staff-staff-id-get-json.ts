/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StaffResponse } from '../../models/staff-response';

export interface ApiStaffStaffIdGet$Json$Params {
  staffId: number;
}

export function apiStaffStaffIdGet$Json(http: HttpClient, rootUrl: string, params: ApiStaffStaffIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<StaffResponse>> {
  const rb = new RequestBuilder(rootUrl, apiStaffStaffIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('staffId', params.staffId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StaffResponse>;
    })
  );
}

apiStaffStaffIdGet$Json.PATH = '/api/Staff/{staffId}';
