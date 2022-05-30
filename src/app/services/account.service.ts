import { HttpHeaders } from "@angular/common/http";
import { AuthService } from "./../shared/auth/auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  userToken: any;
  constructor(private http: ApiService, public auth: AuthService) {
    this.userToken = this.auth.forLocalstorage();
  }

  getAccounts(): Observable<any> {
    // let headers = new HttpHeaders().set("Authorization", this.userToken);
    return this.http.get("AccountSetup/getAccountDetails");
  }

  addAccount(data: any): Observable<any> {
    return this.http.post("AccountSetup/AccountCreate/Accounts", data);
  }

  addBulkAccounts(data: any): Observable<any> {
    return this.http.post("AccountSetup/AccountCreate/bulk", data);
  }

  getAccountById(data): Observable<any> {
    return this.http.get("AccountSetup/getAccount/" + data);
  }
  getAccountHead(): Observable<any> {
    return this.http.get("AccountSetup/getAccountHead");
  }
  getAccountType(): Observable<any> {
    return this.http.get("AccountSetup/getAccountType");
  }
  deleteAccountById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteAccount/" + data.id);
  }

  updateAccount(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateAccount/" + data.id, data);
  }
}
