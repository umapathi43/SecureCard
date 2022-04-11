//api.service.ts
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { AuthService } from "app/shared/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  ApiUrl: string;
  userToken: any;
  constructor(private http: HttpClient, private router: Router) {
    // this.userToken = this.auth.forLocalstorage();
    this.ApiUrl = environment.ApiURL;
  }
  // http get method
  get(url) {
    let httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this.http.get(this.ApiUrl + "/" + url, httpOptions);
  }
  delete(url) {
    let httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this.http.delete(this.ApiUrl + "/" + url, httpOptions);
  }
  put(url, data) {
    let httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this.http.put(this.ApiUrl + "/" + url, data, httpOptions);
  }

  // http post method
  post(url, data) {
    let httpOptions = {
      headers: new HttpHeaders({}),
    };
    return this.http.post(this.ApiUrl + "/" + url, data, httpOptions);
  }
}
