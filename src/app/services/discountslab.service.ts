import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class DiscountslabService {
  constructor(private http: ApiService) {}
  getDisconts(): Observable<any> {
    return this.http.get("AccountSetup/getDiscountDetails");
  }

  addDiscount(data: any): Observable<any> {
    return this.http.post("AccountSetup/discountSlabCreate/discountSlab", data);
  }

  addBulkDiscounts(data: any): Observable<any> {
    return this.http.post("AccountSetup/discountSlabCreate/bulk", data);
  }

  getDiscountById(data): Observable<any> {
    return this.http.get("AccountSetup/getDiscoutSlab/" + data.id);
  }
  deleteDiscountById(data): Observable<any> {
    return this.http.delete("AccountSetup/deletDiscoutSlab/" + data.id);
  }

  updateDiscount(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateDiscoutSlab/" + data.id, data);
  }
}
