/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiAccountAssignRolePost } from '../fn/account/api-account-assign-role-post';
import { ApiAccountAssignRolePost$Params } from '../fn/account/api-account-assign-role-post';
import { apiAccountCreateRolePost } from '../fn/account/api-account-create-role-post';
import { ApiAccountCreateRolePost$Params } from '../fn/account/api-account-create-role-post';
import { apiAccountDeleteRolePost } from '../fn/account/api-account-delete-role-post';
import { ApiAccountDeleteRolePost$Params } from '../fn/account/api-account-delete-role-post';
import { apiAccountLogoutGet } from '../fn/account/api-account-logout-get';
import { ApiAccountLogoutGet$Params } from '../fn/account/api-account-logout-get';
import { apiAccountRemoveRolePost } from '../fn/account/api-account-remove-role-post';
import { ApiAccountRemoveRolePost$Params } from '../fn/account/api-account-remove-role-post';
import { apiAccountUpdateProfilePatch } from '../fn/account/api-account-update-profile-patch';
import { ApiAccountUpdateProfilePatch$Params } from '../fn/account/api-account-update-profile-patch';

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

  /** Path part for operation `apiAccountAssignRolePost()` */
  static readonly ApiAccountAssignRolePostPath = '/api/Account/assign-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountAssignRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountAssignRolePost$Response(params?: ApiAccountAssignRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountAssignRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountAssignRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountAssignRolePost(params?: ApiAccountAssignRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountAssignRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountRemoveRolePost()` */
  static readonly ApiAccountRemoveRolePostPath = '/api/Account/remove-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountRemoveRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRemoveRolePost$Response(params?: ApiAccountRemoveRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountRemoveRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountRemoveRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountRemoveRolePost(params?: ApiAccountRemoveRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountRemoveRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountCreateRolePost()` */
  static readonly ApiAccountCreateRolePostPath = '/api/Account/create-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountCreateRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCreateRolePost$Response(params?: ApiAccountCreateRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountCreateRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountCreateRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountCreateRolePost(params?: ApiAccountCreateRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountCreateRolePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountDeleteRolePost()` */
  static readonly ApiAccountDeleteRolePostPath = '/api/Account/delete-role';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountDeleteRolePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountDeleteRolePost$Response(params?: ApiAccountDeleteRolePost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountDeleteRolePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountDeleteRolePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAccountDeleteRolePost(params?: ApiAccountDeleteRolePost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountDeleteRolePost$Response(params, context).pipe(
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
