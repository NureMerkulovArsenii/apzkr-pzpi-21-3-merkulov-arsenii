/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiBookingCancelCustomerIdBookingBookingIdDelete } from '../fn/booking/api-booking-cancel-customer-id-booking-booking-id-delete';
import { ApiBookingCancelCustomerIdBookingBookingIdDelete$Params } from '../fn/booking/api-booking-cancel-customer-id-booking-booking-id-delete';
import { apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet } from '../fn/booking/api-booking-checkin-booking-id-code-code-customer-customer-id-get';
import { ApiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Params } from '../fn/booking/api-booking-checkin-booking-id-code-code-customer-customer-id-get';
import { apiBookingCheckoutBookingIdCustomerCustomerIdGet } from '../fn/booking/api-booking-checkout-booking-id-customer-customer-id-get';
import { ApiBookingCheckoutBookingIdCustomerCustomerIdGet$Params } from '../fn/booking/api-booking-checkout-booking-id-customer-customer-id-get';
import { apiBookingCreatePost } from '../fn/booking/api-booking-create-post';
import { ApiBookingCreatePost$Params } from '../fn/booking/api-booking-create-post';
import { apiBookingFilterGet$Json } from '../fn/booking/api-booking-filter-get-json';
import { ApiBookingFilterGet$Json$Params } from '../fn/booking/api-booking-filter-get-json';
import { apiBookingFilterGet$Plain } from '../fn/booking/api-booking-filter-get-plain';
import { ApiBookingFilterGet$Plain$Params } from '../fn/booking/api-booking-filter-get-plain';
import { apiBookingIdGet$Json } from '../fn/booking/api-booking-id-get-json';
import { ApiBookingIdGet$Json$Params } from '../fn/booking/api-booking-id-get-json';
import { apiBookingIdGet$Plain } from '../fn/booking/api-booking-id-get-plain';
import { ApiBookingIdGet$Plain$Params } from '../fn/booking/api-booking-id-get-plain';
import { apiBookingUpdatePut } from '../fn/booking/api-booking-update-put';
import { ApiBookingUpdatePut$Params } from '../fn/booking/api-booking-update-put';
import { FilterBookingResponse } from '../models/filter-booking-response';

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

  /** Path part for operation `apiBookingCancelCustomerIdBookingBookingIdDelete()` */
  static readonly ApiBookingCancelCustomerIdBookingBookingIdDeletePath = '/api/Booking/cancel{customerId}/booking{bookingId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCancelCustomerIdBookingBookingIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCancelCustomerIdBookingBookingIdDelete$Response(params: ApiBookingCancelCustomerIdBookingBookingIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCancelCustomerIdBookingBookingIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCancelCustomerIdBookingBookingIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCancelCustomerIdBookingBookingIdDelete(params: ApiBookingCancelCustomerIdBookingBookingIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCancelCustomerIdBookingBookingIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingFilterGet()` */
  static readonly ApiBookingFilterGetPath = '/api/Booking/filter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingFilterGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet$Plain$Response(params?: ApiBookingFilterGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterBookingResponse>>> {
    return apiBookingFilterGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingFilterGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet$Plain(params?: ApiBookingFilterGet$Plain$Params, context?: HttpContext): Observable<Array<FilterBookingResponse>> {
    return this.apiBookingFilterGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FilterBookingResponse>>): Array<FilterBookingResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingFilterGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet$Json$Response(params?: ApiBookingFilterGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterBookingResponse>>> {
    return apiBookingFilterGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingFilterGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingFilterGet$Json(params?: ApiBookingFilterGet$Json$Params, context?: HttpContext): Observable<Array<FilterBookingResponse>> {
    return this.apiBookingFilterGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FilterBookingResponse>>): Array<FilterBookingResponse> => r.body)
    );
  }

  /** Path part for operation `apiBookingIdGet()` */
  static readonly ApiBookingIdGetPath = '/api/Booking/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet$Plain$Response(params: ApiBookingIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterBookingResponse>> {
    return apiBookingIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet$Plain(params: ApiBookingIdGet$Plain$Params, context?: HttpContext): Observable<FilterBookingResponse> {
    return this.apiBookingIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilterBookingResponse>): FilterBookingResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet$Json$Response(params: ApiBookingIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterBookingResponse>> {
    return apiBookingIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingIdGet$Json(params: ApiBookingIdGet$Json$Params, context?: HttpContext): Observable<FilterBookingResponse> {
    return this.apiBookingIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilterBookingResponse>): FilterBookingResponse => r.body)
    );
  }

  /** Path part for operation `apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet()` */
  static readonly ApiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGetPath = '/api/Booking/checkin/{bookingId}/code/{code}/customer/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Response(params: ApiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet(params: ApiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCheckinBookingIdCodeCodeCustomerCustomerIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiBookingCheckoutBookingIdCustomerCustomerIdGet()` */
  static readonly ApiBookingCheckoutBookingIdCustomerCustomerIdGetPath = '/api/Booking/checkout/{bookingId}/customer/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiBookingCheckoutBookingIdCustomerCustomerIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckoutBookingIdCustomerCustomerIdGet$Response(params: ApiBookingCheckoutBookingIdCustomerCustomerIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiBookingCheckoutBookingIdCustomerCustomerIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiBookingCheckoutBookingIdCustomerCustomerIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiBookingCheckoutBookingIdCustomerCustomerIdGet(params: ApiBookingCheckoutBookingIdCustomerCustomerIdGet$Params, context?: HttpContext): Observable<void> {
    return this.apiBookingCheckoutBookingIdCustomerCustomerIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
