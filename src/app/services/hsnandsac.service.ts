import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class HsnandsacService {
  constructor(private http: ApiService) {}

  getHSNs(): Observable<any> {
    return this.http.get("AccountSetup/getHSNeDetails");
  }

  addHSN(data: any): Observable<any> {
    return this.http.post("AccountSetup/HSNCreate/HSNSAC", data);
  }
  bluckAddHSN(data: any): Observable<any> {
    return this.http.post("AccountSetup/HSNCreate/bulk", data);
  }

  getHSNById(data): Observable<any> {
    return this.http.get("AccountSetup/getHSNType/" + data.id);
  }
  deleteHSNById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteHSNType/" + data.id);
  }

  updateHSN(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateHSNType/" + data.id, data);
  }
}
