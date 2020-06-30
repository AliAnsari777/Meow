import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptorService implements HttpInterceptor {

  constructor(private authSercice:AuthService) { }
 // const token = this.loginService.getAuthToken();
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

          let token = this.authSercice.isAuthenticated();
          if (token) {
            return next.handle(httpRequest.clone({ headers: httpRequest.headers.set('x-access-token', "Bearer "+token) }));
          }
          return next.handle(httpRequest);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptorService, multi: true }
];
