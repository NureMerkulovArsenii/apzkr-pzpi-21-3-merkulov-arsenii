/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { InfoResponse } from '../../models/info-response';

export interface ApiAccountManageInfoGet$Params {
}

export function apiAccountManageInfoGet(http: HttpClient, rootUrl: string, params?: ApiAccountManageInfoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<InfoResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAccountManageInfoGet.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<InfoResponse>;
    })
  );
}

apiAccountManageInfoGet.PATH = '/api/Account/manage/info';
