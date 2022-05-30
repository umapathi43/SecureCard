import { AuthService } from "app/shared/auth/auth.service";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  userToken: any;
  constructor(private http: ApiService, public auth: AuthService) {
    this.userToken = this.auth.forLocalstorage();
  }

  getUsers(): Observable<any> {
    // let headers = new HttpHeaders().set("Authorization", this.userToken);
    return this.http.get("AccountSetup/getCustomerDetails");
  }

  addUser(data: any): Observable<any> {
    return this.http.post("AccountSetup/CustomerCreate/Customer", data);
  }

  addBulkUsers(data: any): Observable<any> {
    return this.http.post("AccountSetup/CustomerCreate/bulk", data);
  }

  getUserById(data): Observable<any> {
    return this.http.get("AccountSetup/getCustomer/" + data.id);
  }
  deleteUserById(data): Observable<any> {
    return this.http.put("AccountSetup/deleteCustomer/" + data.id, data);
  }
  getGstTypes(): Observable<any> {
    return this.http.get("AccountSetup/getGstType");
  }
  getPaymentModes(): Observable<any> {
    return this.http.get("AccountSetup/getPaymentModes");
  }
  updateUser(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateCustomer/" + data.id, data);
  }
  getBestBeforeDetails(): Observable<any> {
    return this.http.get("AccountSetup/getBestBeforeDetails");
  }
}
