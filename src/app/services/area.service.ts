import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class AreaService {
  constructor(private http: ApiService) {}
  getAreas(): Observable<any> {
    return this.http.get("AccountSetup/getAreaDetails");
  }

  addArea(data: any): Observable<any> {
    return this.http.post("AccountSetup/AreaCreate/Area", data);
  }

  addBulkAreas(data: any): Observable<any> {
    return this.http.post("AccountSetup/AreaCreate/bulk", data);
  }
  getAreaById(data): Observable<any> {
    return this.http.get("AccountSetup/getArea/" + data.id);
  }
  deleteAreaById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteArea/" + data.id);
  }

  updateArea(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateArea/" + data.id, data);
  }

  getRoutes(): Observable<any> {
    return this.http.get("AccountSetup/getRouteDetails");
  }
}
