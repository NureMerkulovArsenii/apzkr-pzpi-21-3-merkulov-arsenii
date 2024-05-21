/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { OccupancyReportResult } from '../../models/occupancy-report-result';
import { ReportTimeBoundaryRequest } from '../../models/report-time-boundary-request';

export interface ApiStatsOccupancyReportHotelIdPost$Plain$Params {
  hotelId: number;
      body?: ReportTimeBoundaryRequest
}

export function apiStatsOccupancyReportHotelIdPost$Plain(http: HttpClient, rootUrl: string, params: ApiStatsOccupancyReportHotelIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OccupancyReportResult>>> {
  const rb = new RequestBuilder(rootUrl, apiStatsOccupancyReportHotelIdPost$Plain.PATH, 'post');
  if (params) {
    rb.path('hotelId', params.hotelId, {"style":"simple"});
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<OccupancyReportResult>>;
    })
  );
}

apiStatsOccupancyReportHotelIdPost$Plain.PATH = '/api/Stats/occupancy-report/{hotelId}';
