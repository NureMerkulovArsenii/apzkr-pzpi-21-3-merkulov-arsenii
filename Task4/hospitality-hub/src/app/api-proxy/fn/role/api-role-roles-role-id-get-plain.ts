/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RecordResponseDto } from '../../models/record-response-dto';

export interface ApiRoleRolesRoleIdGet$Plain$Params {
  roleId: number;
}

export function apiRoleRolesRoleIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiRoleRolesRoleIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RecordResponseDto>>> {
  const rb = new RequestBuilder(rootUrl, apiRoleRolesRoleIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('roleId', params.roleId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RecordResponseDto>>;
    })
  );
}

apiRoleRolesRoleIdGet$Plain.PATH = '/api/Role/roles/{roleId}';
