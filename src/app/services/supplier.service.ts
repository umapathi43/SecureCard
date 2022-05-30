import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root",
})
export class SupplierService {
  constructor(private http: ApiService) {}

  getSuppliers(): Observable<any> {
    return this.http.get("AccountSetup/getSuppliers");
  }

  addSupplier(data: any): Observable<any> {
    return this.http.post("AccountSetup/SupplierCreate/Supplier", data);
  }

  addBulkSuppliers(data: any): Observable<any> {
    return this.http.post("AccountSetup/SupplierCreate/bulk", data);
  }

  getSupplierById(data): Observable<any> {
    return this.http.get("AccountSetup/getSupplier/" + data.id);
  }
  deleteSupplierById(data): Observable<any> {
    return this.http.delete("AccountSetup/deleteSupplier/" + data.id);
  }

  updateSupplier(data: any): Observable<any> {
    return this.http.put("AccountSetup/updateSupplier/" + data.id, data);
  }
}
