/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { HotelResponse } from '../../models/hotel-response';

export interface ApiHotelGet$Json$Params {
}

export function apiHotelGet$Json(http: HttpClient, rootUrl: string, params?: ApiHotelGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HotelResponse>>> {
  const rb = new RequestBuilder(rootUrl, apiHotelGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<HotelResponse>>;
    })
  );
}

apiHotelGet$Json.PATH = '/api/Hotel';
