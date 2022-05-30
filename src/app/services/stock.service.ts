import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class StockService {
  constructor(private http: ApiService) {}
  getStocks(): Observable<any> {
    return this.http.get("AccountSetup/getStockDetails");
  }

  addStock(data: any): Observable<any> {
    return this.http.post("AccountSetup/StockCreate/Stock", data);
  }

  getStockById(data): Observable<any> {
    return this.http.get("AccountSetup/getStock/" + data.id);
  }
  deleteStockById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteStock/" + data.id);
  }

  updateStock(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateStock/" + data.id, data);
  }
}
