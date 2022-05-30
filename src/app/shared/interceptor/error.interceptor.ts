import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { AuthService } from "./../auth/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 403) {
          // auto logout if 403 response returned from api
          this.authenticationService.logout();
        }
        if (err.status === 0) {
          this.toastr.warning("Session Experied", err.statusText);
          // setTimeout(() => {
          //   this.authenticationService.logout();
          // }, 3000);
        }
        this.spinner.hide();
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
