/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBookingCancelIdDelete } from '../fn/booking/api-booking-cancel-id-delete';
import { ApiBookingCancelIdDelete$Params } from '../fn/booking/api-booking-cancel-id-delete';
import { apiBookingCheckinBookingIdCodeCodeGet } from '../fn/booking/api-booking-checkin-booking-id-code-code-get';
import { ApiBookingCheckinBookingIdCodeCodeGet$Params } from '../fn/booking/api-booking-checkin-booking-id-code-code-get';
import { apiBookingCheckoutBookingIdGet } from '../fn/booking/api-booking-checkout-booking-id-get';
import { ApiBookingCheckoutBookingIdGet$Params } from '../fn/booking/api-booking-checkout-booking-id-get';
import { apiBookingCreatePost } from '../fn/booking/api-booking-create-post';
import { ApiBookingCreatePost$Params } from '../fn/booking/api-booking-create-post';
import { apiBookingFilterGet } from '../fn/booking/api-booking-filter-get';
import { ApiBookingFilterGet$Params } from '../fn/booking/api-booking-filter-get';
import { apiBookingIdGet } from '../fn/booking/api-booking-id-get';
import { ApiBookingIdGet$Params } from '../fn/booking/api-booking-id-get';
import { apiBookingUpdatePut } from '../fn/booking/api-booking-update-put';
import { ApiBookingUpdatePut$Params } from '../fn/booking/api-booking-update-put';

@Injectable({ providedIn: 'root' })
export class BookingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiBookingCreatePost()` */
  static readonly ApiBookingCreatePostPath = '/api/Booking/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBookingCreatePost$Response(params?: ApiBookingCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBookingCreatePost(params?: ApiBookingCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingUpdatePut()` */
  static readonly ApiBookingUpdatePutPath = '/api/Booking/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBookingUpdatePut$Response(params?: ApiBookingUpdatePut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingUpdatePut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiBookingUpdatePut(params?: ApiBookingUpdatePut$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingCancelIdDelete()` */
  static readonly ApiBookingCancelIdDeletePath = '/api/Booking/cancel/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCancelIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCancelIdDelete$Response(params: ApiBookingCancelIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCancelIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCancelIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCancelIdDelete(params: ApiBookingCancelIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCancelIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingFilterGet()` */
  static readonly ApiBookingFilterGetPath = '/api/Booking/filter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingFilterGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet$Response(params?: ApiBookingFilterGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingFilterGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingFilterGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet(params?: ApiBookingFilterGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingFilterGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingIdGet()` */
  static readonly ApiBookingIdGetPath = '/api/Booking/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet$Response(params: ApiBookingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet(params: ApiBookingIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingCheckinBookingIdCodeCodeGet()` */
  static readonly ApiBookingCheckinBookingIdCodeCodeGetPath = '/api/Booking/checkin/{bookingId}/code/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCheckinBookingIdCodeCodeGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckinBookingIdCodeCodeGet$Response(params: ApiBookingCheckinBookingIdCodeCodeGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCheckinBookingIdCodeCodeGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCheckinBookingIdCodeCodeGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckinBookingIdCodeCodeGet(params: ApiBookingCheckinBookingIdCodeCodeGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCheckinBookingIdCodeCodeGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingCheckoutBookingIdGet()` */
  static readonly ApiBookingCheckoutBookingIdGetPath = '/api/Booking/checkout/{bookingId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCheckoutBookingIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckoutBookingIdGet$Response(params: ApiBookingCheckoutBookingIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCheckoutBookingIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCheckoutBookingIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckoutBookingIdGet(params: ApiBookingCheckoutBookingIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCheckoutBookingIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
