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
import { apiHotelGet } from '../fn/hotel/api-hotel-get';
import { ApiHotelGet$Params } from '../fn/hotel/api-hotel-get';
import { apiHotelIdGet } from '../fn/hotel/api-hotel-id-get';
import { ApiHotelIdGet$Params } from '../fn/hotel/api-hotel-id-get';
import { apiHotelUpdateIdPut } from '../fn/hotel/api-hotel-update-id-put';
import { ApiHotelUpdateIdPut$Params } from '../fn/hotel/api-hotel-update-id-put';

@Injectable({ providedIn: 'root' })
export class HotelService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHotelGet()` */
  static readonly ApiHotelGetPath = '/api/Hotel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet$Response(params?: ApiHotelGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiHotelGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelGet(params?: ApiHotelGet$Params, context?: HttpContext): Observable<void> {
    return this.apiHotelGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiHotelIdGet()` */
  static readonly ApiHotelIdGetPath = '/api/Hotel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHotelIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet$Response(params: ApiHotelIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiHotelIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHotelIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHotelIdGet(params: ApiHotelIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiHotelIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
