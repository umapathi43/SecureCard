import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  constructor(private http: ApiService) {}

  getItemDetails(): Observable<any> {
    return this.http.get("AccountSetup/getItemDetails");
  }
  getItemDetailsById(id): Observable<any> {
    return this.http.get("AccountSetup/getItem/" + id);
  }
  updateItemDetailsById(id, item): Observable<any> {
    return this.http.put("AccountSetup/updateItemDetails/" + id, item);
  }
  deleteItem(id, value): Observable<any> {
    return this.http.put("AccountSetup/updateItemDetails/" + id, value);
  }
  createItem(value): Observable<any> {
    return this.http.post("AccountSetup/itemCreate/Item", value);
  }
  bluckCreateItem(value): Observable<any> {
    return this.http.post("AccountSetup/itemCreate/bulk", value);
  }
}
