/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponseDto } from '../../models/user-response-dto';

export interface ApiAccountUsersUserIdGet$Plain$Params {
  userId: number;
}

export function apiAccountUsersUserIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiAccountUsersUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiAccountUsersUserIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserResponseDto>;
    })
  );
}

apiAccountUsersUserIdGet$Plain.PATH = '/api/Account/users/{userId}';
