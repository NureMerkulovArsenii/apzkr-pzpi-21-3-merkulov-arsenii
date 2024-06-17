/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiStatsOccupancyReportHotelIdPost$Json } from '../fn/stats/api-stats-occupancy-report-hotel-id-post-json';
import { ApiStatsOccupancyReportHotelIdPost$Json$Params } from '../fn/stats/api-stats-occupancy-report-hotel-id-post-json';
import { apiStatsOccupancyReportHotelIdPost$Plain } from '../fn/stats/api-stats-occupancy-report-hotel-id-post-plain';
import { ApiStatsOccupancyReportHotelIdPost$Plain$Params } from '../fn/stats/api-stats-occupancy-report-hotel-id-post-plain';
import { OccupancyReportResult } from '../models/occupancy-report-result';

@Injectable({ providedIn: 'root' })
export class StatsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiStatsOccupancyReportHotelIdPost()` */
  static readonly ApiStatsOccupancyReportHotelIdPostPath = '/api/Stats/occupancy-report/{hotelId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatsOccupancyReportHotelIdPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatsOccupancyReportHotelIdPost$Plain$Response(params: ApiStatsOccupancyReportHotelIdPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OccupancyReportResult>>> {
    return apiStatsOccupancyReportHotelIdPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStatsOccupancyReportHotelIdPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatsOccupancyReportHotelIdPost$Plain(params: ApiStatsOccupancyReportHotelIdPost$Plain$Params, context?: HttpContext): Observable<Array<OccupancyReportResult>> {
    return this.apiStatsOccupancyReportHotelIdPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OccupancyReportResult>>): Array<OccupancyReportResult> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStatsOccupancyReportHotelIdPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatsOccupancyReportHotelIdPost$Json$Response(params: ApiStatsOccupancyReportHotelIdPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<OccupancyReportResult>>> {
    return apiStatsOccupancyReportHotelIdPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiStatsOccupancyReportHotelIdPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiStatsOccupancyReportHotelIdPost$Json(params: ApiStatsOccupancyReportHotelIdPost$Json$Params, context?: HttpContext): Observable<Array<OccupancyReportResult>> {
    return this.apiStatsOccupancyReportHotelIdPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<OccupancyReportResult>>): Array<OccupancyReportResult> => r.body)
    );
  }

}
