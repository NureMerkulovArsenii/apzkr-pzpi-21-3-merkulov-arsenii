/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserResponseDto } from '../../models/user-response-dto';

export interface ApiAccountUsersUserIdGet$Json$Params {
  userId: number;
}

export function apiAccountUsersUserIdGet$Json(http: HttpClient, rootUrl: string, params: ApiAccountUsersUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseDto>> {
  const rb = new RequestBuilder(rootUrl, apiAccountUsersUserIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserResponseDto>;
    })
  );
}

apiAccountUsersUserIdGet$Json.PATH = '/api/Account/users/{userId}';
