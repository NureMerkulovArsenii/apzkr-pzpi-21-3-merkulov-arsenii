/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoomResponse } from '../../models/room-response';

export interface ApiRoomIdGet$Json$Params {
  id: number;
}

export function apiRoomIdGet$Json(http: HttpClient, rootUrl: string, params: ApiRoomIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<RoomResponse>> {
  const rb = new RequestBuilder(rootUrl, apiRoomIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<RoomResponse>;
    })
  );
}

apiRoomIdGet$Json.PATH = '/api/Room/{id}';
