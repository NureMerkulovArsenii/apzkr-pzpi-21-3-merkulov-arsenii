/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateUserProfileRequest } from '../../models/update-user-profile-request';

export interface ApiAccountUsersUserIdPatch$Params {
  userId: number;
      body?: UpdateUserProfileRequest
}

export function apiAccountUsersUserIdPatch(http: HttpClient, rootUrl: string, params: ApiAccountUsersUserIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiAccountUsersUserIdPatch.PATH, 'patch');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
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

apiAccountUsersUserIdPatch.PATH = '/api/Account/users/{userId}';
