/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccessTokenResponse } from '../../models/access-token-response';
import { LoginRequest } from '../../models/login-request';

export interface ApiAccountLoginPost$Params {
  useCookies?: boolean;
  useSessionCookies?: boolean;
      body?: LoginRequest
}

export function apiAccountLoginPost(http: HttpClient, rootUrl: string, params?: ApiAccountLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AccessTokenResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAccountLoginPost.PATH, 'post');
  if (params) {
    rb.query('useCookies', params.useCookies, {"style":"form"});
    rb.query('useSessionCookies', params.useSessionCookies, {"style":"form"});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccessTokenResponse>;
    })
  );
}

apiAccountLoginPost.PATH = '/api/Account/login';
