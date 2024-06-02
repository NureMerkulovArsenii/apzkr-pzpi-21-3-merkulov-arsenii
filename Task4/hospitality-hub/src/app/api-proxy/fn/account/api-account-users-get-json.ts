/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponseDto } from '../../models/user-response-dto';

export interface ApiAccountUsersGet$Json$Params {
}

export function apiAccountUsersGet$Json(http: HttpClient, rootUrl: string, params?: ApiAccountUsersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponseDto>>> {
  const rb = new RequestBuilder(rootUrl, apiAccountUsersGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<UserResponseDto>>;
    })
  );
}

apiAccountUsersGet$Json.PATH = '/api/Account/users';
