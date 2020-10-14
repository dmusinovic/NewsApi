import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettingsService } from './app-settings-service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(
    private readonly appSettings: AppSettingsService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let baseUrl = this.appSettings.getAppConfig().baseUrl;

    //add API KEY to header of every request
    let headers = new HttpHeaders();
    headers = headers.set('X-Api-Key', 'f842743d07b040999e5d9465ba9369e0');
   
    const cloned = req.clone({
      headers,
      url: baseUrl + req.url
    });

    return next.handle(cloned);
  }
}
