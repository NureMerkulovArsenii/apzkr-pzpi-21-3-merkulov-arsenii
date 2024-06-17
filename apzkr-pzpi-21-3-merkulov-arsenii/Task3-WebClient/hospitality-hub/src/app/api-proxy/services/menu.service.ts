/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiMenuMenuNodesGet$Json } from '../fn/menu/api-menu-menu-nodes-get-json';
import { ApiMenuMenuNodesGet$Json$Params } from '../fn/menu/api-menu-menu-nodes-get-json';
import { apiMenuMenuNodesGet$Plain } from '../fn/menu/api-menu-menu-nodes-get-plain';
import { ApiMenuMenuNodesGet$Plain$Params } from '../fn/menu/api-menu-menu-nodes-get-plain';
import { apiMenuMenuNodesRoleIdGet$Json } from '../fn/menu/api-menu-menu-nodes-role-id-get-json';
import { ApiMenuMenuNodesRoleIdGet$Json$Params } from '../fn/menu/api-menu-menu-nodes-role-id-get-json';
import { apiMenuMenuNodesRoleIdGet$Plain } from '../fn/menu/api-menu-menu-nodes-role-id-get-plain';
import { ApiMenuMenuNodesRoleIdGet$Plain$Params } from '../fn/menu/api-menu-menu-nodes-role-id-get-plain';
import { MenuNodeResponse } from '../models/menu-node-response';

@Injectable({ providedIn: 'root' })
export class MenuService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiMenuMenuNodesGet()` */
  static readonly ApiMenuMenuNodesGetPath = '/api/Menu/menu-nodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMenuMenuNodesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesGet$Plain$Response(params?: ApiMenuMenuNodesGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuNodeResponse>>> {
    return apiMenuMenuNodesGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMenuMenuNodesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesGet$Plain(params?: ApiMenuMenuNodesGet$Plain$Params, context?: HttpContext): Observable<Array<MenuNodeResponse>> {
    return this.apiMenuMenuNodesGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MenuNodeResponse>>): Array<MenuNodeResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMenuMenuNodesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesGet$Json$Response(params?: ApiMenuMenuNodesGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuNodeResponse>>> {
    return apiMenuMenuNodesGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMenuMenuNodesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesGet$Json(params?: ApiMenuMenuNodesGet$Json$Params, context?: HttpContext): Observable<Array<MenuNodeResponse>> {
    return this.apiMenuMenuNodesGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MenuNodeResponse>>): Array<MenuNodeResponse> => r.body)
    );
  }

  /** Path part for operation `apiMenuMenuNodesRoleIdGet()` */
  static readonly ApiMenuMenuNodesRoleIdGetPath = '/api/Menu/menu-nodes/{roleId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMenuMenuNodesRoleIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesRoleIdGet$Plain$Response(params: ApiMenuMenuNodesRoleIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuNodeResponse>>> {
    return apiMenuMenuNodesRoleIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMenuMenuNodesRoleIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesRoleIdGet$Plain(params: ApiMenuMenuNodesRoleIdGet$Plain$Params, context?: HttpContext): Observable<Array<MenuNodeResponse>> {
    return this.apiMenuMenuNodesRoleIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MenuNodeResponse>>): Array<MenuNodeResponse> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMenuMenuNodesRoleIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesRoleIdGet$Json$Response(params: ApiMenuMenuNodesRoleIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MenuNodeResponse>>> {
    return apiMenuMenuNodesRoleIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiMenuMenuNodesRoleIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMenuMenuNodesRoleIdGet$Json(params: ApiMenuMenuNodesRoleIdGet$Json$Params, context?: HttpContext): Observable<Array<MenuNodeResponse>> {
    return this.apiMenuMenuNodesRoleIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MenuNodeResponse>>): Array<MenuNodeResponse> => r.body)
    );
  }

}
