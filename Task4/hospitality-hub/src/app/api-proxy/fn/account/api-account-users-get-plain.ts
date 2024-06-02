/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponseDto } from '../../models/user-response-dto';

export interface ApiAccountUsersGet$Plain$Params {
}

export function apiAccountUsersGet$Plain(http: HttpClient, rootUrl: string, params?: ApiAccountUsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponseDto>>> {
  const rb = new RequestBuilder(rootUrl, apiAccountUsersGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserResponseDto>>;
    })
  );
}

apiAccountUsersGet$Plain.PATH = '/api/Account/users';
