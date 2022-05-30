import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class PackingService {
  constructor(private http: ApiService) {}
  getPacks(): Observable<any> {
    return this.http.get("AccountSetup/getPackDetails");
  }

  addPack(data: any): Observable<any> {
    return this.http.post("AccountSetup/PackCreate/Pack", data);
  }

  bluckAddPack(data: any): Observable<any> {
    return this.http.post("AccountSetup/PackCreate/bulk", data);
  }

  getPackById(data): Observable<any> {
    return this.http.get("AccountSetup/getPack/" + data.id);
  }
  deletePackById(data): Observable<any> {
    return this.http.delete("AccountSetup/deletePack/" + data.id);
  }

  updatePack(data: any): Observable<any> {
    return this.http.put("AccountSetup/updatePackType/" + data.id, data);
  }
}
