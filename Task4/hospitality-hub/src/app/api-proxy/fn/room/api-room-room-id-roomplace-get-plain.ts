/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { RoomPlaceResponse } from '../../models/room-place-response';

export interface ApiRoomRoomIdRoomplaceGet$Plain$Params {
  roomId: number;
}

export function apiRoomRoomIdRoomplaceGet$Plain(http: HttpClient, rootUrl: string, params: ApiRoomRoomIdRoomplaceGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<RoomPlaceResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiRoomRoomIdRoomplaceGet$Plain.PATH, 'get');
  if (params) {
    rb.path('roomId', params.roomId, {"style":"simple"});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<RoomPlaceResponse>>;
    })
  );
}

apiRoomRoomIdRoomplaceGet$Plain.PATH = '/api/Room/{roomId}/roomplace';
