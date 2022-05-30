import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import swal from "sweetalert2";
import * as xlsx from "xlsx";
import * as FileSaver from "file-saver";
import { NgxSpinnerService } from "ngx-spinner";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { renderFlagCheckIfStmt } from "@angular/compiler/src/render3/view/template";
declare var jsPDF: any;
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { CommonService } from "app/services/commonService/common.service";

export class CashWithdraw {
  public entryDate: any;
  public amount: number;
  public bankName: Date;
  public id: any;
}

@Component({
  selector: "app-cash-withdraw",
  templateUrl: "./cash-withdraw.component.html",
  styleUrls: [
    "./cash-withdraw.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CashWithdrawComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  rows: any[];
  public ColumnMode = ColumnMode;
  exportColumns: any;
  public limitRef = 10;
  private tempData = [];
  gettable: boolean;
  CustomeId: any;
  entryDatemodel: any;

  constructor(
    private spinner: NgxSpinnerService,
    private _purchaseService: PurchaseEntryService,
    private _location: Location,
    private toastr: ToastrService,
    public _commonService: CommonService
  ) {}

  model = new CashWithdraw();
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  public columns = [
    { name: "ID", prop: "id" },
    { name: "No of Items", prop: "noItems" },
    { name: "Discount %", prop: "discount" },
    { name: "Discount Amount", prop: "discAmount" },
    { name: "Gross Amounts", prop: "grossAmounts" },
    { name: "Net Amount", prop: "netAmount" },
  ];
  ngOnInit(): void {
    this.gettable = true;
    this.getCashWithdraw();
  }
  exportPdf() {
    let doc = new jsPDF("l", "pt");
    doc.autoTable(this.exportColumns, this.rows);
    doc.save("areas.pdf");
  }
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.areaName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  exportExcel() {
    const worksheet = xlsx.utils.json_to_sheet(this.rows);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, "areas");
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    let EXCEL_EXTENSION = ".xlsx";
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  getCashWithdraw() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._purchaseService.getCashWithdraw().subscribe((ok: any) => {
      this.rows = ok;
      this.rows.forEach(el => { el.entryDate = el.entryDate ? (this._commonService.dateformat(el.entryDate)).split("-").reverse().join("-") : el.entryDate });
      this.tempData = this.rows;
      this.table.element.click();
      this.spinner.hide();
    });
  }
  goBack() {
    // this._location.back();
    this.gettable = true;
  }
  addCash() {
    this.entryDatemodel = this.model = null;
    this.gettable = false;
    this.CustomeId = null;
  }
  getById(data) {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.CustomeId = data;
    this.gettable = false;
    this._purchaseService
      .getCashWithdrawById(this.CustomeId)
      .subscribe((ok) => {
        this.model = ok;
        this.entryDatemodel = this._commonService.dateformat(ok.entryDate);
        this.spinner.hide();
      });
  }
  onSubmit() {
    this.model.entryDate = this.entryDatemodel;
    // this.model.entryDate = this._purchaseService.toModel(this.entryDatemodel);
    var req = this.model;
    req["status"] = "A";
    this._purchaseService.addCashWithdraw(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.toastr.success("Success", "SuccessFully Cash Widthdraw");
          this.CustomeId = null;
          this.getCashWithdraw();
          this.gettable = true;
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  updateCashe() {
    this.model.entryDate = this.entryDatemodel;
    var req = this.model;
    this._purchaseService.updateCashWithdraw(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.CustomeId = null;
          this.toastr.success("Success", "SuccessFully Cash Widthdraw");
          this.getCashWithdraw();
          this.gettable = true;
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
