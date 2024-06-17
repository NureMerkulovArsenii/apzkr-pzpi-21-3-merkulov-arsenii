/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TwoFactorRequest } from '../../models/two-factor-request';
import { TwoFactorResponse } from '../../models/two-factor-response';

export interface ApiAccountManage2FaPost$Params {
      body?: TwoFactorRequest
}

export function apiAccountManage2FaPost(http: HttpClient, rootUrl: string, params?: ApiAccountManage2FaPost$Params, context?: HttpContext): Observable<StrictHttpResponse<TwoFactorResponse>> {
  const rb = new RequestBuilder(rootUrl, apiAccountManage2FaPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TwoFactorResponse>;
    })
  );
}

apiAccountManage2FaPost.PATH = '/api/Account/manage/2fa';
