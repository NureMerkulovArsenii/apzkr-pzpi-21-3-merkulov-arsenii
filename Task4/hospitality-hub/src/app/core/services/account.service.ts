import {Injectable} from '@angular/core';
import {HospitalityHubApiService} from "../../api-proxy/services/hospitality-hub-api.service";
import {LoginRequest} from "../../api-proxy/models/login-request";
import {ApiAccountLoginPost$Params} from "../../api-proxy/fn/hospitality-hub-api/api-account-login-post";
import {Observable} from "rxjs";
import {AccessTokenResponse} from "../../api-proxy/models/access-token-response";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private readonly accountService: HospitalityHubApiService) {
  }

  login(loginModel: LoginRequest): Observable<AccessTokenResponse> {
    const request: ApiAccountLoginPost$Params = {
      body: loginModel,
      useCookies: false,
      useSessionCookies: false
    }
    return this.accountService.apiAccountLoginPost(request)
  }
}
