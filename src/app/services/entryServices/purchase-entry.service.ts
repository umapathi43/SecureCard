import { Injectable } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { ApiService } from "../api.service";

@Injectable({
  providedIn: "root",
})
export class PurchaseEntryService {
  readonly DELIMITER = "-";
  constructor(private http: ApiService) {}

  toModel(date: NgbDateStruct | null): string | null {
    var d = new Date(
      date
        ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
        : null
    );

    return (
      d.getFullYear() +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + d.getDate()).slice(-2)
    );
  }

  getSettingsDetails(): Observable<any> {
    return this.http.get("purchase-entry/getSettingDetails");
  }

  updateSettingsDetails(value): Observable<any> {
    return this.http.put("purchase-entry/updateSetting/" + value.id, value);
  }

  //////purchase  Entry//////////
  getpurchaseEntry(): Observable<any> {
    return this.http.get("purchase-entry/getAll");
  }
  addPurchaseEntry(value): Observable<any> {
    return this.http.post("purchase-entry/create", value);
  }

  updatePurchaseEntry(value): Observable<any> {
    return this.http.post("purchase-entry/Update/" + value.id, value);
  }
  getPurchaseId(value): Observable<any> {
    return this.http.get("purchase-entry/get/" + value);
  }

  //////open stock//////////
  getOpenStockEntry(): Observable<any> {
    return this.http.get("opening-stock/getAll");
  }
  addOpenStockEntry(value): Observable<any> {
    return this.http.post("opening-stock/create", value);
  }
  updateOpenStockEntry(value): Observable<any> {
    return this.http.put("opening-stock/update/" + value.id, value);
  }
  getOpenStockEntryById(value): Observable<any> {
    return this.http.get("opening-stock/get/" + value);
  }

  ////shortage entry////////////////
  getShortageEntry(): Observable<any> {
    return this.http.get("ShortageEntry/getAll");
  }
  getShortageEntryById(value): Observable<any> {
    return this.http.get("ShortageEntry/get/" + value);
  }
  saveShortageEntry(value): Observable<any> {
    return this.http.post("ShortageEntry/create", value);
  }
  updateShortageEntryById(value): Observable<any> {
    return this.http.put("ShortageEntry/update/" + value.id, value);
  }

  /// sales invoice entry //////
  getSalesInvoiceEntry(): Observable<any> {
    return this.http.get("SalesInvoice/getAll");
  }
  getSalesInvoiceEntryById(value): Observable<any> {
    return this.http.get("SalesInvoice/get/" + value);
  }
  saveSalesInvoiceEntryEntry(value): Observable<any> {
    return this.http.post("SalesInvoice/create", value);
  }
  updateSalesInvoiceEntryEntry(value): Observable<any> {
    return this.http.put("SalesInvoice/update/" + value.id, value);
  }

  ////////cash withdraw////////////////
  getCashWithdraw(): Observable<any> {
    return this.http.get("CashService/getAllDetails");
  }
  getCashWithdrawById(value): Observable<any> {
    return this.http.get("CashService/getCashWithdraw/" + value);
  }
  addCashWithdraw(value): Observable<any> {
    return this.http.post("CashService/CashWithdraw", value);
  }
  updateCashWithdraw(value): Observable<any> {
    return this.http.post("CashService/UpdateCashWithdraw/" + value.id, value);
  }

  ////////counter sales///////////////
  getCountersale(): Observable<any> {
    return this.http.get("counter-sale/getAll");
  }
  getCountersaleById(value): Observable<any> {
    return this.http.get("counter-sale/get/" + value);
  }
  addCountersale(value): Observable<any> {
    return this.http.post("counter-sale/create", value);
  }
  updateCountersale(value): Observable<any> {
    return this.http.put("counter-sale/update/" + value.id, value);
  }

  ////////stock Adjust////////////////
  getStockAdjust(): Observable<any> {
    return this.http.get("StockAdj/getAll");
  }
  getStockAdjustId(value): Observable<any> {
    return this.http.get("StockAdj/get/" + value);
  }
  addStockAdjust(value): Observable<any> {
    return this.http.post("StockAdj/create", value);
  }
  updateStockAdjust(value): Observable<any> {
    return this.http.put("StockAdj/update/" + value.id, value);
  }

  //////Payment  Entry//////////
  getPaymentEntry(): Observable<any> {
    return this.http.get("payment-entry/getAll");
  }

  addPaymentEntry(value): Observable<any> {
    return this.http.post("payment-entry/create", value);
  }

  updatePaymentEntry(value): Observable<any> {
    return this.http.put("payment-entry/update/" + value.id, value);
  }

  getPaymentId(value): Observable<any> {
    return this.http.get("payment-entry/get/" + value);
  }

  //////Purchase order//////////
  getPurchaseOrder(): Observable<any> {
    return this.http.get("purchase-order/getAll");
  }

  addPurchaseOrder(value): Observable<any> {
    return this.http.post("purchase-order/create", value);
  }

  updatePurchaseOrder(value): Observable<any> {
    return this.http.put("purchase-order/update/" + value.id, value);
  }

  getPurchaseorderById(value): Observable<any> {
    return this.http.get("purchase-order/get/" + value);
  }

  //////sales order//////////
  getSalesOrder(): Observable<any> {
    return this.http.get("sales-order/getAll");
  }

  addSalesOrder(value): Observable<any> {
    return this.http.post("sales-order/create", value);
  }

  updateSalesOrder(value): Observable<any> {
    return this.http.put("sales-order/update/" + value.id, value);
  }

  getSalesOrderById(value): Observable<any> {
    return this.http.get("sales-order/get/" + value);
  }

  getOrderGenerations(): Observable<any> {
    return this.http.get("order-generation/getAll");
  }

  addOrderGeneration(value): Observable<any> {
    return this.http.post("order-generation/create", value);
  }

  updateOrderGeneration(value): Observable<any> {
    return this.http.put("order-generation/update/" + value.id, value);
  }

  getOrderGenerationById(value): Observable<any> {
    return this.http.get("order-generation/get/" + value);
  }
}
