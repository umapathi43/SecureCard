import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class StoretypeService {
  constructor(private http: ApiService) {}

  getStoreTypes(): Observable<any> {
    return this.http.get("AccountSetup/getStoreTypeDetails");
  }

  addStoreType(data: any): Observable<any> {
    return this.http.post("AccountSetup/StoreTypeCreate/StoreType", data);
  }

  getStoreTypeById(data): Observable<any> {
    return this.http.get("AccountSetup/getStoreType/" + data.id);
  }
  deleteStoreTypeById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteStoreType/" + data.id);
  }

  updateStoreType(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateStoreType/" + data.id, data);
  }
}
