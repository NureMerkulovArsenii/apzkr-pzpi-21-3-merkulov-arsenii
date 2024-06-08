/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiCustomerCreatePost } from '../fn/customer/api-customer-create-post';
import { ApiCustomerCreatePost$Params } from '../fn/customer/api-customer-create-post';
import { apiCustomerDeleteCustomerIdDelete } from '../fn/customer/api-customer-delete-customer-id-delete';
import { ApiCustomerDeleteCustomerIdDelete$Params } from '../fn/customer/api-customer-delete-customer-id-delete';
import { apiCustomerFilterGet$Json } from '../fn/customer/api-customer-filter-get-json';
import { ApiCustomerFilterGet$Json$Params } from '../fn/customer/api-customer-filter-get-json';
import { apiCustomerFilterGet$Plain } from '../fn/customer/api-customer-filter-get-plain';
import { ApiCustomerFilterGet$Plain$Params } from '../fn/customer/api-customer-filter-get-plain';
import { apiCustomerIdGet$Json } from '../fn/customer/api-customer-id-get-json';
import { ApiCustomerIdGet$Json$Params } from '../fn/customer/api-customer-id-get-json';
import { apiCustomerIdGet$Plain } from '../fn/customer/api-customer-id-get-plain';
import { ApiCustomerIdGet$Plain$Params } from '../fn/customer/api-customer-id-get-plain';
import { apiCustomerUpdateCustomerIdPatch } from '../fn/customer/api-customer-update-customer-id-patch';
import { ApiCustomerUpdateCustomerIdPatch$Params } from '../fn/customer/api-customer-update-customer-id-patch';
import { FilterCustomerResponse } from '../models/filter-customer-response';

@Injectable({ providedIn: 'root' })
export class CustomerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiCustomerCreatePost()` */
  static readonly ApiCustomerCreatePostPath = '/api/Customer/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost$Response(params?: ApiCustomerCreatePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerCreatePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerCreatePost(params?: ApiCustomerCreatePost$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerCreatePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerUpdateCustomerIdPatch()` */
  static readonly ApiCustomerUpdateCustomerIdPatchPath = '/api/Customer/update/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerUpdateCustomerIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerIdPatch$Response(params: ApiCustomerUpdateCustomerIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerUpdateCustomerIdPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerUpdateCustomerIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCustomerUpdateCustomerIdPatch(params: ApiCustomerUpdateCustomerIdPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerUpdateCustomerIdPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerDeleteCustomerIdDelete()` */
  static readonly ApiCustomerDeleteCustomerIdDeletePath = '/api/Customer/delete/{customerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerDeleteCustomerIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerDeleteCustomerIdDelete$Response(params: ApiCustomerDeleteCustomerIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiCustomerDeleteCustomerIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerDeleteCustomerIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerDeleteCustomerIdDelete(params: ApiCustomerDeleteCustomerIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiCustomerDeleteCustomerIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiCustomerFilterGet()` */
  static readonly ApiCustomerFilterGetPath = '/api/Customer/filter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerFilterGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerFilterGet$Plain$Response(params?: ApiCustomerFilterGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterCustomerResponse>>> {
    return apiCustomerFilterGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerFilterGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerFilterGet$Plain(params?: ApiCustomerFilterGet$Plain$Params, context?: HttpContext): Observable<Array<FilterCustomerResponse>> {
    return this.apiCustomerFilterGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FilterCustomerResponse>>): Array<FilterCustomerResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerFilterGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerFilterGet$Json$Response(params?: ApiCustomerFilterGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FilterCustomerResponse>>> {
    return apiCustomerFilterGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerFilterGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerFilterGet$Json(params?: ApiCustomerFilterGet$Json$Params, context?: HttpContext): Observable<Array<FilterCustomerResponse>> {
    return this.apiCustomerFilterGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FilterCustomerResponse>>): Array<FilterCustomerResponse> => r.body)
    );
  }

  /** Path part for operation `apiCustomerIdGet()` */
  static readonly ApiCustomerIdGetPath = '/api/Customer/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain$Response(params: ApiCustomerIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterCustomerResponse>> {
    return apiCustomerIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Plain(params: ApiCustomerIdGet$Plain$Params, context?: HttpContext): Observable<FilterCustomerResponse> {
    return this.apiCustomerIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilterCustomerResponse>): FilterCustomerResponse => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCustomerIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json$Response(params: ApiCustomerIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<FilterCustomerResponse>> {
    return apiCustomerIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCustomerIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCustomerIdGet$Json(params: ApiCustomerIdGet$Json$Params, context?: HttpContext): Observable<FilterCustomerResponse> {
    return this.apiCustomerIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<FilterCustomerResponse>): FilterCustomerResponse => r.body)
    );
  }

}
