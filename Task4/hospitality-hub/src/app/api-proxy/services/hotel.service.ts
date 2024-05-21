/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiHotelCreatePost } from '../fn/hotel/api-hotel-create-post';
import { ApiHotelCreatePost$Params } from '../fn/hotel/api-hotel-create-post';
import { apiHotelDeleteIdDelete } from '../fn/hotel/api-hotel-delete-id-delete';
import { ApiHotelDeleteIdDelete$Params } from '../fn/hotel/api-hotel-delete-id-delete';
import { apiHotelGet$Json } from '../fn/hotel/api-hotel-get-json';
import { ApiHotelGet$Json$Params } from '../fn/hotel/api-hotel-get-json';
import { apiHotelGet$Plain } from '../fn/hotel/api-hotel-get-plain';
import { ApiHotelGet$Plain$Params } from '../fn/hotel/api-hotel-get-plain';
import { apiHotelIdGet$Json } from '../fn/hotel/api-hotel-id-get-json';
import { ApiHotelIdGet$Json$Params } from '../fn/hotel/api-hotel-id-get-json';
import { apiHotelIdGet$Plain } from '../fn/hotel/api-hotel-id-get-plain';
import { ApiHotelIdGet$Plain$Params } from '../fn/hotel/api-hotel-id-get-plain';
import { apiHotelUpdateIdPut } from '../fn/hotel/api-hotel-update-id-put';
import { ApiHotelUpdateIdPut$Params } from '../fn/hotel/api-hotel-update-id-put';
import { HotelResponse } from '../models/hotel-response';

@Injectable({ providedIn: 'root' })
export class HotelService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHotelGet()` */
  static readonly ApiHotelGetPath = '/api/Hotel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet$Plain$Response(params?: ApiHotelGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HotelResponse>>> {
    return apiHotelGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet$Plain(params?: ApiHotelGet$Plain$Params, context?: HttpContext): Observable<Array<HotelResponse>> {
    return this.apiHotelGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HotelResponse>>): Array<HotelResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet$Json$Response(params?: ApiHotelGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<HotelResponse>>> {
    return apiHotelGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet$Json(params?: ApiHotelGet$Json$Params, context?: HttpContext): Observable<Array<HotelResponse>> {
    return this.apiHotelGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<HotelResponse>>): Array<HotelResponse> => r.body)
    );
  }

  /** Path part for operation `apiHotelIdGet()` */
  static readonly ApiHotelIdGetPath = '/api/Hotel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet$Plain$Response(params: ApiHotelIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<HotelResponse>> {
    return apiHotelIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet$Plain(params: ApiHotelIdGet$Plain$Params, context?: HttpContext): Observable<HotelResponse> {
    return this.apiHotelIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<HotelResponse>): HotelResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet$Json$Response(params: ApiHotelIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<HotelResponse>> {
    return apiHotelIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet$Json(params: ApiHotelIdGet$Json$Params, context?: HttpContext): Observable<HotelResponse> {
    return this.apiHotelIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<HotelResponse>): HotelResponse => r.body)
    );
  }

  /** Path part for operation `apiHotelCreatePost()` */
  static readonly ApiHotelCreatePostPath = '/api/Hotel/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHotelCreatePost$Response(params?: ApiHotelCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiHotelCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHotelCreatePost(params?: ApiHotelCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiHotelCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiHotelUpdateIdPut()` */
  static readonly ApiHotelUpdateIdPutPath = '/api/Hotel/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelUpdateIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHotelUpdateIdPut$Response(params: ApiHotelUpdateIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiHotelUpdateIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelUpdateIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHotelUpdateIdPut(params: ApiHotelUpdateIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiHotelUpdateIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiHotelDeleteIdDelete()` */
  static readonly ApiHotelDeleteIdDeletePath = '/api/Hotel/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelDeleteIdDelete$Response(params: ApiHotelDeleteIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiHotelDeleteIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelDeleteIdDelete(params: ApiHotelDeleteIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiHotelDeleteIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
