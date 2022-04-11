import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { NgxSpinnerService } from "ngx-spinner";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { CommonService } from "app/services/commonService/common.service";

export class ShortageEntry {
  public entryDate: any;
  public totalQty: number;
  public totalItems: number;
}
@Component({
  selector: "app-shortage-entry",
  templateUrl: "./shortage-entry.component.html",
  styleUrls: [
    "./shortage-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ShortageEntryComponent implements OnInit {
  showFields: any;
  CustomeId: any;
  readonly DELIMITER = "-";
  entryDatemodel: any;
  constructor(
    public actRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private _purchaseService: PurchaseEntryService,
    private _location: Location,
    private toastr: ToastrService,
    public _commonService: CommonService
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getShortageByID();
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
    { name: "item", prop: "Item" },
    { name: "Qty", prop: "Qty" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      qty: 0,
      id: 0,
    },
  ];
  columns2 = [
    { name: "item", prop: "Item" },
    { name: "qty", prop: "Qty" },
  ];
  model = new ShortageEntry();
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
      qty: "",
      id: 0,
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
  getShortageByID() {
    this._purchaseService.getShortageEntryById(this.CustomeId)
      .subscribe((ok:any) => {
        this.model = ok;
        this.entryDatemodel = this._commonService.dateformat(ok.entryDate);
        this.Items = ok.shortageDetails;
        this.spinner.hide();
      });
  }
  goBack() {
    this._location.back();
  }
  totalCount() {
    let tot = 0;
    this.model.totalItems = this.Items.length;
    this.Items.forEach((e) => {
      if (e.qty) {
        tot = tot + e.qty;
      }
    });
    this.model.totalQty = tot;
  }
  onSubmit() {
    this.model.entryDate = this.entryDatemodel;
    var req = this.model;
    req["shortageDetails"] = this.Items;
    req["shortageDetails"].forEach((e) => {
      delete e.id;
    });
    req["status"] = "A";
    this._purchaseService.saveShortageEntry(req).subscribe(
      (ok) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Shortage Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to Create Shortage");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  updateShortage() {
    this.model.entryDate = this.entryDatemodel;
    var req = this.model;
    req["shortageDetails"] = this.Items;
    this._purchaseService.updateShortageEntryById(req).subscribe(
      (ok) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Shortage updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Shortage");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
      : null;
  }
}
