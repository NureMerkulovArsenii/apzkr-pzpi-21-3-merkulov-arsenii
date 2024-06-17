/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MenuNodeResponse } from '../../models/menu-node-response';

export interface ApiMenuMenuNodesGet$Plain$Params {
}

export function apiMenuMenuNodesGet$Plain(http: HttpClient, rootUrl: string, params?: ApiMenuMenuNodesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuNodeResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiMenuMenuNodesGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MenuNodeResponse>>;
    })
  );
}

apiMenuMenuNodesGet$Plain.PATH = '/api/Menu/menu-nodes';
