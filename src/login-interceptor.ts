import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './app/services/auth-service.service';
@Injectable()
export class LoginInterceptor implements HttpInterceptor {

    USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUserMail';
    USER_NAME_SESSION_ATTRIBUTE_PASSWORD = 'authenticatedUserPass';

    constructor(private authenticationService: AuthServiceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${window.btoa(sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)+ ":" + sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_PASSWORD))}`
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}