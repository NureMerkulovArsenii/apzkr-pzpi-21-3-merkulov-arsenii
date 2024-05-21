import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ApiModule} from "./api-proxy/api.module";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ToastrModule} from "ngx-toastr";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import {I18nInterceptor} from "./core/interceptors/i18n.interceptor";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: environment.apiUrl}),
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    FontAwesomeModule,
    ToastrModule.forRoot(
      {
        timeOut: 4000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      }
    ),
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false,}},
    {provide: HTTP_INTERCEPTORS, useClass: I18nInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
