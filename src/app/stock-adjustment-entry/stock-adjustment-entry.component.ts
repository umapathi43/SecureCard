import { ActivatedRoute } from "@angular/router";
import { PurchaseEntryService } from "./../services/entryServices/purchase-entry.service";
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { ItemService } from "app/services/item.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { CommonService } from "app/services/commonService/common.service";
import { NgxSpinnerService } from "ngx-spinner";

export class RecepitEntry {
  public entryDate: any;
  public id: any;
  public totalAdj: any;
}
@Component({
  selector: "app-stock-adjustment-entry",
  templateUrl: "./stock-adjustment-entry.component.html",
  styleUrls: [
    "./stock-adjustment-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
})
export class StockAdjustmentEntryComponent implements OnInit {
  showFields: any;
  itemArray: any[];
  CustomeId: any;
  updatedRes: any;
  orginDate: NgbDateStruct;
  expiryDateFlag: boolean;
  constructor(
    public itenService: ItemService,
    private _purchaseService: PurchaseEntryService,
    private toastr: ToastrService,
    private _location: Location,
    private actRoute: ActivatedRoute,
    public _commonService: CommonService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getStockByID();
    }
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  // row data
  rows: any[] = [
    {
      itemName: "dean3004",
      qty: "2",
      schemeQty: "2",
      purchaseRate: "2",
      discount: "2",
      billDate: "2020-12-12",
      supplierName: "dean3004",
    },
  ];
  ColumnMode = ColumnMode;
  //limitRef = 10;
  exportColumns: any;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  // columns = [
  //   { name: "selectAmount", prop: "Item" },
  //   { name: "entryAmount", prop: "entryAmount" },
  //   { name: "Expiry", prop: "expiry" },
  //   { name: "purchaseRate", prop: "purchaseRate" },
  //   { name: "discount", prop: "discount" },
  //   { name: "billDate", prop: "billDate" },
  //   { name: "supplierName", prop: "supplierName" },
  // ];

  public Items: any[] = [
    {
      itemName: "",
      batch: "",
      expiry: "",
      currentStock: "",
      agjustmentQty: "",
      mrp: "",
      rate: "",
      id: 0,
    },
  ];
  columns2 = [
    { name: "Name", prop: "name" },
    { name: "Batch", prop: "batch" },
    { name: "Expiry", prop: "expiry" },
    { name: "MRP", prop: "mrp" },
    { name: "CurrentStock", prop: "currentstock" },
    { name: "Rate", prop: "rate" },
  ];
  model = new RecepitEntry();
  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (!this.CustomeId) {
      this.spinner.hide();
    }
  }

  addItem() {
    this.Items.push({
      itemName: "",
      batch: "",
      expiry: "",
      currentStock: "",
      agjustmentQty: "",
      mrp: "",
      rate: "",
      id: 0,
    });
    this.Items = [...this.Items];
    this.model.totalAdj = this.Items.length;
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.model.totalAdj = this.Items.length;
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }
  getStockByID() {
    this._purchaseService
      .getStockAdjustId(this.CustomeId)
      .subscribe((ok: any) => {
        this.updatedRes = ok;
        this.model = this.updatedRes;
        this.model.entryDate = this._commonService.dateformat(ok.entryDate);
        this.Items = this.updatedRes.stockAdjDetails;
        this.model.totalAdj = this.Items.length;
        this.spinner.hide();
      });
  }
  onSubmit() {
    var req = {};
    // this.model.entryDate = this.orginDate;
    // this.model.entryDate = null;
    req = this.model;
    req['status'] = "A";
    req["stockAdjDetails"] = this.Items;
    req["stockAdjDetails"].forEach((t) => {
      t.enterexpiryDate = this._commonService.yearValue(t.expiryDate);
      delete t.id;
      // delete t.expiry;
    });
    this._purchaseService.addStockAdjust(req).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Stock Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to create Stock");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  Updatestock() {
    var req = {};
    // this.model.entryDate = this.orginDate;
    // this.model.entryDate = null;
    req = this.model;
    req["stockAdjDetails"] = this.Items;
    req["stockAdjDetails"].forEach((t) => {
      if (t.expiryDate){
        t.enterexpiryDate = this._commonService.yearValue(t.expiryDate);
      }
      delete t.id;
      // delete t.expiry;
    });
    this._purchaseService.updateStockAdjust(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.toastr.success("Success", "SuccessFully Stock Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to Update Stock");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  onExpiryFormate(event) {
    if (event.target.value) {
      if ((+event.target.value) > 12 ? true : false) {
        this.expiryDateFlag = true;
      } else {
        this.expiryDateFlag = false;
        return this._commonService.expiryFormat(event);
      }
    }
  }
  datevalidation(event){
    if (event.target.value) {
      let val = event.target.value.split('/');
      if(!val[1]){
        this.expiryDateFlag = true;
      }else{
        this.expiryDateFlag = false;
      }
    }
  }
  goBack() {
    this._location.back();
  }
}
