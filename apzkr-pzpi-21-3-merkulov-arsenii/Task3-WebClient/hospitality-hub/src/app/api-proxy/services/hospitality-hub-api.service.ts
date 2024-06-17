/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AccessTokenResponse } from '../models/access-token-response';
import { apiAccountForgotPasswordPost } from '../fn/hospitality-hub-api/api-account-forgot-password-post';
import { ApiAccountForgotPasswordPost$Params } from '../fn/hospitality-hub-api/api-account-forgot-password-post';
import { apiAccountLoginPost } from '../fn/hospitality-hub-api/api-account-login-post';
import { ApiAccountLoginPost$Params } from '../fn/hospitality-hub-api/api-account-login-post';
import { apiAccountManage2FaPost } from '../fn/hospitality-hub-api/api-account-manage-2-fa-post';
import { ApiAccountManage2FaPost$Params } from '../fn/hospitality-hub-api/api-account-manage-2-fa-post';
import { apiAccountManageInfoGet } from '../fn/hospitality-hub-api/api-account-manage-info-get';
import { ApiAccountManageInfoGet$Params } from '../fn/hospitality-hub-api/api-account-manage-info-get';
import { apiAccountManageInfoPost } from '../fn/hospitality-hub-api/api-account-manage-info-post';
import { ApiAccountManageInfoPost$Params } from '../fn/hospitality-hub-api/api-account-manage-info-post';
import { apiAccountRefreshPost } from '../fn/hospitality-hub-api/api-account-refresh-post';
import { ApiAccountRefreshPost$Params } from '../fn/hospitality-hub-api/api-account-refresh-post';
import { apiAccountRegisterPost } from '../fn/hospitality-hub-api/api-account-register-post';
import { ApiAccountRegisterPost$Params } from '../fn/hospitality-hub-api/api-account-register-post';
import { apiAccountResendConfirmationEmailPost } from '../fn/hospitality-hub-api/api-account-resend-confirmation-email-post';
import { ApiAccountResendConfirmationEmailPost$Params } from '../fn/hospitality-hub-api/api-account-resend-confirmation-email-post';
import { apiAccountResetPasswordPost } from '../fn/hospitality-hub-api/api-account-reset-password-post';
import { ApiAccountResetPasswordPost$Params } from '../fn/hospitality-hub-api/api-account-reset-password-post';
import { InfoResponse } from '../models/info-response';
import { mapIdentityApiApiAccountConfirmEmail } from '../fn/hospitality-hub-api/map-identity-api-api-account-confirm-email';
import { MapIdentityApiApiAccountConfirmEmail$Params } from '../fn/hospitality-hub-api/map-identity-api-api-account-confirm-email';
import { TwoFactorResponse } from '../models/two-factor-response';

@Injectable({ providedIn: 'root' })
export class HospitalityHubApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAccountRegisterPost()` */
  static readonly ApiAccountRegisterPostPath = '/api/Account/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountRegisterPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountRegisterPost$Response(params?: ApiAccountRegisterPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountRegisterPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountRegisterPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountRegisterPost(params?: ApiAccountRegisterPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountRegisterPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountLoginPost()` */
  static readonly ApiAccountLoginPostPath = '/api/Account/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountLoginPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountLoginPost$Response(params?: ApiAccountLoginPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AccessTokenResponse>> {
    return apiAccountLoginPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountLoginPost(params?: ApiAccountLoginPost$Params, context?: HttpContext): Observable<AccessTokenResponse> {
    return this.apiAccountLoginPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccessTokenResponse>): AccessTokenResponse => r.body)
    );
  }

  /** Path part for operation `apiAccountRefreshPost()` */
  static readonly ApiAccountRefreshPostPath = '/api/Account/refresh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountRefreshPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountRefreshPost$Response(params?: ApiAccountRefreshPost$Params, context?: HttpContext): Observable<StrictHttpResponse<AccessTokenResponse>> {
    return apiAccountRefreshPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountRefreshPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountRefreshPost(params?: ApiAccountRefreshPost$Params, context?: HttpContext): Observable<AccessTokenResponse> {
    return this.apiAccountRefreshPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<AccessTokenResponse>): AccessTokenResponse => r.body)
    );
  }

  /** Path part for operation `mapIdentityApiApiAccountConfirmEmail()` */
  static readonly MapIdentityApiApiAccountConfirmEmailPath = '/api/Account/confirmEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `mapIdentityApiApiAccountConfirmEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  mapIdentityApiApiAccountConfirmEmail$Response(params?: MapIdentityApiApiAccountConfirmEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return mapIdentityApiApiAccountConfirmEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `mapIdentityApiApiAccountConfirmEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  mapIdentityApiApiAccountConfirmEmail(params?: MapIdentityApiApiAccountConfirmEmail$Params, context?: HttpContext): Observable<void> {
    return this.mapIdentityApiApiAccountConfirmEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountResendConfirmationEmailPost()` */
  static readonly ApiAccountResendConfirmationEmailPostPath = '/api/Account/resendConfirmationEmail';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountResendConfirmationEmailPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountResendConfirmationEmailPost$Response(params?: ApiAccountResendConfirmationEmailPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountResendConfirmationEmailPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountResendConfirmationEmailPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountResendConfirmationEmailPost(params?: ApiAccountResendConfirmationEmailPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountResendConfirmationEmailPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountForgotPasswordPost()` */
  static readonly ApiAccountForgotPasswordPostPath = '/api/Account/forgotPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountForgotPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountForgotPasswordPost$Response(params?: ApiAccountForgotPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountForgotPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountForgotPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountForgotPasswordPost(params?: ApiAccountForgotPasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountForgotPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountResetPasswordPost()` */
  static readonly ApiAccountResetPasswordPostPath = '/api/Account/resetPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountResetPasswordPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountResetPasswordPost$Response(params?: ApiAccountResetPasswordPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiAccountResetPasswordPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountResetPasswordPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountResetPasswordPost(params?: ApiAccountResetPasswordPost$Params, context?: HttpContext): Observable<void> {
    return this.apiAccountResetPasswordPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAccountManage2FaPost()` */
  static readonly ApiAccountManage2FaPostPath = '/api/Account/manage/2fa';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountManage2FaPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountManage2FaPost$Response(params?: ApiAccountManage2FaPost$Params, context?: HttpContext): Observable<StrictHttpResponse<TwoFactorResponse>> {
    return apiAccountManage2FaPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountManage2FaPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountManage2FaPost(params?: ApiAccountManage2FaPost$Params, context?: HttpContext): Observable<TwoFactorResponse> {
    return this.apiAccountManage2FaPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<TwoFactorResponse>): TwoFactorResponse => r.body)
    );
  }

  /** Path part for operation `apiAccountManageInfoGet()` */
  static readonly ApiAccountManageInfoGetPath = '/api/Account/manage/info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountManageInfoGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountManageInfoGet$Response(params?: ApiAccountManageInfoGet$Params, context?: HttpContext): Observable<StrictHttpResponse<InfoResponse>> {
    return apiAccountManageInfoGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountManageInfoGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAccountManageInfoGet(params?: ApiAccountManageInfoGet$Params, context?: HttpContext): Observable<InfoResponse> {
    return this.apiAccountManageInfoGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<InfoResponse>): InfoResponse => r.body)
    );
  }

  /** Path part for operation `apiAccountManageInfoPost()` */
  static readonly ApiAccountManageInfoPostPath = '/api/Account/manage/info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAccountManageInfoPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountManageInfoPost$Response(params?: ApiAccountManageInfoPost$Params, context?: HttpContext): Observable<StrictHttpResponse<InfoResponse>> {
    return apiAccountManageInfoPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAccountManageInfoPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  apiAccountManageInfoPost(params?: ApiAccountManageInfoPost$Params, context?: HttpContext): Observable<InfoResponse> {
    return this.apiAccountManageInfoPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<InfoResponse>): InfoResponse => r.body)
    );
  }

}
