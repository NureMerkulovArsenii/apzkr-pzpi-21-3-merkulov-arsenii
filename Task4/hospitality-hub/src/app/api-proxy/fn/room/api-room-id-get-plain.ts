/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoomResponse } from '../../models/room-response';

export interface ApiRoomIdGet$Plain$Params {
  id: number;
}

export function apiRoomIdGet$Plain(http: HttpClient, rootUrl: string, params: ApiRoomIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<RoomResponse>> {
  const rb = new RequestBuilder(rootUrl, apiRoomIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoomResponse>;
    })
  );
}

apiRoomIdGet$Plain.PATH = '/api/Room/{id}';
