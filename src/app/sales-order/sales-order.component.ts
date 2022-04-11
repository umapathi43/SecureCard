import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { CommonService } from "app/services/commonService/common.service";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";

export class SalesOrder {
  public customerMobileNo: Date;
  public soDate: any;
  public deliveryDate: any;
  public customerName: string;
  public customerAddress: string;
  public totalCount: any;
  public totalQty: any;
}
@Component({
  selector: "app-sales-order",
  templateUrl: "./sales-order.component.html",
  styleUrls: [
    "./sales-order.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SalesOrderComponent implements OnInit {
  showFields: any;
  CustomeId: any;
  updatedRes: any;
  deliveryDate: string;
  soDate: string;
  constructor(private actRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public _commonService: CommonService,
    private _location: Location,
    private toastr: ToastrService,
    private _salesOrder: PurchaseEntryService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getSalesOrderId();
    }
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  // row data
  rows: any[];
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
    { name: "Item Name", prop: "itemName" },
    { name: "Qty", prop: "qty" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      qty: "",
    },
  ];
  columns2 = [
    { name: "ItemName", prop: "itemName" },
    { name: "qty", prop: "Qty" },
  ];
  model = new SalesOrder();
  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (!this.CustomeId) {
      this.spinner.hide();
    }
  }
  getSalesOrderId() {
    this._salesOrder.getSalesOrderById(this.CustomeId).subscribe((ok: any) => {
      this.updatedRes = ok;
      this.model = this.updatedRes;
      this.model.deliveryDate = this._commonService.dateformat(this.updatedRes.deliveryDate);
      this.model.soDate = this._commonService.dateformat(this.updatedRes.soDate);
      this.Items = this.updatedRes.salesOrderDetailsEntity;
      this.totalQty();
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    });
  }
  totalQty() {
    this.model.totalQty = 0;
    this.Items.forEach(e => {
      if (e.qty) {
        this.model.totalQty = this.model.totalQty + e.qty;
      }
    });
    this.model.totalCount = this.Items.length;
  }
  onSubmit() {
    var req = this.model;
    req['salesOrderDetailsEntity'] = this.Items;
    req['status'] = "A";
    this._salesOrder.addSalesOrder(req).subscribe((ok: any) => {
      if (ok) {
        this.toastr.success("Success", "SuccessFully Created");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to create Sales Order");
      }
    })
  }
  onUpdate() {
    var req = this.model;
    req['salesOrderDetailsEntity'] = this.Items;
    this._salesOrder.addSalesOrder(req).subscribe((ok: any) => {
      if (ok) {
        this.toastr.success("Success", "SuccessFully Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to updated Sales Order");
      }
    })
  }
  addItem() {
    this.Items.push({
      item: "",
      qty: "",
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
  goBack() {
    this._location.back()
  }
}
