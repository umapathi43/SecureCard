import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class SalesmanService {
  constructor(private http: ApiService) {}
  getSalesman(): Observable<any> {
    return this.http.get("AccountSetup/getSalesBoyDetails");
  }

  addSalesman(data: any): Observable<any> {
    return this.http.post("AccountSetup/SalesBoyCreate/SaleBoy", data);
  }

  addBulkSalesmans(data: any): Observable<any> {
    return this.http.post("AccountSetup/SalesBoyCreate/bulk", data);
  }

  getSalesmanById(data): Observable<any> {
    return this.http.get("AccountSetup/getSaleBoy/" + data.id);
  }
  deleteSalesmanById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteSalesBoy/" + data.id);
  }

  updateSalesman(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateSalesBoy/" + data.id, data);
  }
}
