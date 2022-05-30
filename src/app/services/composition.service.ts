import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class CompositionService {
  constructor(private http: ApiService) {}

  getCompositions(): Observable<any> {
    return this.http.get("AccountSetup/getCompositionDetails");
  }

  addComposition(data: any): Observable<any> {
    return this.http.post("AccountSetup/CompostionCreate/Composition", data);
  }

  bluckAddComposition(data: any): Observable<any> {
    return this.http.post("AccountSetup/CompostionCreate/bulk", data);
  }

  getCompositionById(data): Observable<any> {
    return this.http.get("AccountSetup/getCompostion/" + data.id);
  }
  deleteCompositionById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteCompisition/" + data.id);
  }

  updateComposition(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateCompositionType/" + data.id, data);
  }
}
