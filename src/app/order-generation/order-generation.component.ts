import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { CommonService } from "app/services/commonService/common.service";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
export class OrderGeneration {
  public orderDate: string;
  public orderQty: any;
  public totalQty: any;
  public status: string;
}
@Component({
  selector: "app-order-generation",
  templateUrl: "./order-generation.component.html",
  styleUrls: ["./order-generation.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class OrderGenerationComponent implements OnInit, AfterViewInit {
  showFields: any;
  updatedRes: any;
  orderId: any;
  constructor(
    private _purchaseEntryService: PurchaseEntryService,
    private _location: Location,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    private commonService: CommonService
  ) {
    this.orderId = this.actRoute.snapshot.params.id;
  }

  ngAfterViewInit(): void {
    if (this.orderId) {
      this.getOrderDetailsById();
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
  columns = [
    { name: "itemName", prop: "itemName" },
    { name: "qty", prop: "qty" },
    { name: "schemeQty", prop: "schemeQty" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "orderQty", prop: "baorderQtytch" },
    { name: "minQty", prop: "minQty" },
    { name: "maxQty", prop: "maxQty" },
    { name: "stock", prop: "stock" },
    { name: "ysale", prop: "ysale" },
    { name: "wsale", prop: "wsale" },
    { name: "msale", prop: "msale" },
    { name: "pmsale", prop: "pmsale" },
  ];
  model = new OrderGeneration();
  ngOnInit(): void {}

  addItem() {
    this.Items.push({
      itemName: "",
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }

  onSubmit() {
    let req = this.model;
    req["orderDetails"] = this.Items;
    this.spinner.show();
    this._purchaseEntryService.addOrderGeneration(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate() {
    console.log(this.model);
    let req = this.model;
    req["orderDetails"] = this.Items;
    this.spinner.show();
    this._purchaseEntryService.updateOrderGeneration(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  getOrderDetailsById() {
    this.spinner.show();
    this._purchaseEntryService
      .getOrderGenerationById(this.orderId)
      .subscribe((ok: any) => {
        this.spinner.hide();
        this.updatedRes = ok;
        this.model = this.updatedRes;
        this.model.orderDate = this.commonService.dateformat(
          this.updatedRes.orderDate
        );
        console.log(this.model);
        this.Items = this.updatedRes.orderDetails;
        document.getElementById("tooltip-validation").click();
        document.getElementById("ngx-datatable-filter").click();
        document.getElementById("basic-form-layouts").click();
      });
  }

  goBack() {
    this._location.back();
  }
}
