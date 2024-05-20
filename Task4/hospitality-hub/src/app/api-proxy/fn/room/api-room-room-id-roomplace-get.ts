/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApiRoomRoomIdRoomplaceGet$Params {
  roomId: number;
}

export function apiRoomRoomIdRoomplaceGet(http: HttpClient, rootUrl: string, params: ApiRoomRoomIdRoomplaceGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, apiRoomRoomIdRoomplaceGet.PATH, 'get');
  if (params) {
    rb.path('roomId', params.roomId, {"style":"simple"});
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

apiRoomRoomIdRoomplaceGet.PATH = '/api/Room/{roomId}/roomplace';
