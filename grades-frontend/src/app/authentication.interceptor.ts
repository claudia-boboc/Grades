import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { UserService } from './routes/main/config/user/users.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private cookieService:CookieService, private userService:UserService) {
    }

    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        
        const clonedRequest =
            request.clone(
                {withCredentials: true}
         );
        return next.handle(clonedRequest)
            .pipe(
                map((event:HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        console.log("Http Response event: ", event);
                    }
                    return event;
                }),
                catchError(error => {
                    console.log("Error response status: ", error.status);
                    if (error.status === 401) {
                        sessionStorage.removeItem('username');
                    }
                    return throwError(error);
                }));

    }
}