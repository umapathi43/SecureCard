import { HttpHeaders } from "@angular/common/http";
import { AuthService } from "./../../shared/auth/auth.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class ReceiptService {
  constructor(private http: ApiService) {
  }
  getAllReceipt(){
    return this.http.get("receipt-entry/getAll");
  }
  createReceipt(body){
    return this.http.post("receipt-entry/create",body);
  }
  getReceiptId(id){
    return this.http.get("receipt-entry/get/"+ id);
  }
  updateReceipt(body){
    return this.http.put("receipt-entry/update/" + body.id, body);
  }
}