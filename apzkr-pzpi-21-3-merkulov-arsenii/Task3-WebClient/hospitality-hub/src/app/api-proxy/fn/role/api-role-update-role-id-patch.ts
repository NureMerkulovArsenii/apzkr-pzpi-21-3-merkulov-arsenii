/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpsertRoleRequest } from '../../models/upsert-role-request';

export interface ApiRoleUpdateRoleIdPatch$Params {
  id: number;
      body?: UpsertRoleRequest
}

export function apiRoleUpdateRoleIdPatch(http: HttpClient, rootUrl: string, params: ApiRoleUpdateRoleIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiRoleUpdateRoleIdPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
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

apiRoleUpdateRoleIdPatch.PATH = '/api/Role/update-role/{id}';
