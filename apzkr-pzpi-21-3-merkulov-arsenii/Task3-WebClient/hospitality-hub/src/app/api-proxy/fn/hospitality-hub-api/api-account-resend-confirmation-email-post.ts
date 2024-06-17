/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ResendConfirmationEmailRequest } from '../../models/resend-confirmation-email-request';

export interface ApiAccountResendConfirmationEmailPost$Params {
      body?: ResendConfirmationEmailRequest
}

export function apiAccountResendConfirmationEmailPost(http: HttpClient, rootUrl: string, params?: ApiAccountResendConfirmationEmailPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiAccountResendConfirmationEmailPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

apiAccountResendConfirmationEmailPost.PATH = '/api/Account/resendConfirmationEmail';
