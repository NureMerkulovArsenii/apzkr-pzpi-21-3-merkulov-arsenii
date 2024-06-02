/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAccountDeleteUserIdDelete } from '../fn/account/api-account-delete-user-id-delete';
import { ApiAccountDeleteUserIdDelete$Params } from '../fn/account/api-account-delete-user-id-delete';
import { apiAccountLogoutGet } from '../fn/account/api-account-logout-get';
import { ApiAccountLogoutGet$Params } from '../fn/account/api-account-logout-get';
import { apiAccountUpdateProfilePatch } from '../fn/account/api-account-update-profile-patch';
import { ApiAccountUpdateProfilePatch$Params } from '../fn/account/api-account-update-profile-patch';
import { apiAccountUsersGet$Json } from '../fn/account/api-account-users-get-json';
import { ApiAccountUsersGet$Json$Params } from '../fn/account/api-account-users-get-json';
import { apiAccountUsersGet$Plain } from '../fn/account/api-account-users-get-plain';
import { ApiAccountUsersGet$Plain$Params } from '../fn/account/api-account-users-get-plain';
import { apiAccountUsersUserIdGet$Json } from '../fn/account/api-account-users-user-id-get-json';
import { ApiAccountUsersUserIdGet$Json$Params } from '../fn/account/api-account-users-user-id-get-json';
import { apiAccountUsersUserIdGet$Plain } from '../fn/account/api-account-users-user-id-get-plain';
import { ApiAccountUsersUserIdGet$Plain$Params } from '../fn/account/api-account-users-user-id-get-plain';
import { apiAccountUsersUserIdPatch } from '../fn/account/api-account-users-user-id-patch';
import { ApiAccountUsersUserIdPatch$Params } from '../fn/account/api-account-users-user-id-patch';
import { UserResponseDto } from '../models/user-response-dto';

@Injectable({ providedIn: 'root' })
export class AccountService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAccountUpdateProfilePatch()` */
  static readonly ApiAccountUpdateProfilePatchPath = '/api/Account/update-profile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUpdateProfilePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountUpdateProfilePatch$Response(params?: ApiAccountUpdateProfilePatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountUpdateProfilePatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUpdateProfilePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountUpdateProfilePatch(params?: ApiAccountUpdateProfilePatch$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountUpdateProfilePatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountUsersGet()` */
  static readonly ApiAccountUsersGetPath = '/api/Account/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersGet$Plain$Response(params?: ApiAccountUsersGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponseDto>>> {
    return apiAccountUsersGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersGet$Plain(params?: ApiAccountUsersGet$Plain$Params, context?: HttpContext): Observable<Array<UserResponseDto>> {
    return this.apiAccountUsersGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponseDto>>): Array<UserResponseDto> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersGet$Json$Response(params?: ApiAccountUsersGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<UserResponseDto>>> {
    return apiAccountUsersGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersGet$Json(params?: ApiAccountUsersGet$Json$Params, context?: HttpContext): Observable<Array<UserResponseDto>> {
    return this.apiAccountUsersGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<UserResponseDto>>): Array<UserResponseDto> => r.body)
    );
  }

  /** Path part for operation `apiAccountUsersUserIdGet()` */
  static readonly ApiAccountUsersUserIdGetPath = '/api/Account/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUsersUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersUserIdGet$Plain$Response(params: ApiAccountUsersUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseDto>> {
    return apiAccountUsersUserIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUsersUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersUserIdGet$Plain(params: ApiAccountUsersUserIdGet$Plain$Params, context?: HttpContext): Observable<UserResponseDto> {
    return this.apiAccountUsersUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseDto>): UserResponseDto => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUsersUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersUserIdGet$Json$Response(params: ApiAccountUsersUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<UserResponseDto>> {
    return apiAccountUsersUserIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUsersUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountUsersUserIdGet$Json(params: ApiAccountUsersUserIdGet$Json$Params, context?: HttpContext): Observable<UserResponseDto> {
    return this.apiAccountUsersUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserResponseDto>): UserResponseDto => r.body)
    );
  }

  /** Path part for operation `apiAccountUsersUserIdPatch()` */
  static readonly ApiAccountUsersUserIdPatchPath = '/api/Account/users/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountUsersUserIdPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountUsersUserIdPatch$Response(params: ApiAccountUsersUserIdPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountUsersUserIdPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountUsersUserIdPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountUsersUserIdPatch(params: ApiAccountUsersUserIdPatch$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountUsersUserIdPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountDeleteUserIdDelete()` */
  static readonly ApiAccountDeleteUserIdDeletePath = '/api/Account/delete-user/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountDeleteUserIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDeleteUserIdDelete$Response(params: ApiAccountDeleteUserIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountDeleteUserIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountDeleteUserIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountDeleteUserIdDelete(params: ApiAccountDeleteUserIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountDeleteUserIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountLogoutGet()` */
  static readonly ApiAccountLogoutGetPath = '/api/Account/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLogoutGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountLogoutGet$Response(params?: ApiAccountLogoutGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountLogoutGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountLogoutGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountLogoutGet(params?: ApiAccountLogoutGet$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountLogoutGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
