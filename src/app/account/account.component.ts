import { AccountService } from "./../services/account.service";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import swal from "sweetalert2";
import * as xlsx from "xlsx";
import * as FileSaver from "file-saver";
import { NgxSpinnerService } from "ngx-spinner";
import { CommonService } from "../services/commonService/common.service";

declare var jsPDF: any;

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: [
    "./account.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AccountComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  // row data
  public rows = [];
  public ColumnMode = ColumnMode;
  public limitRef = 10;
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
  public columns = [
    { name: "ID", prop: "id" },
    { name: "Name", prop: "actName" },
    { name: "AccountHead", prop: "actGroup" },
    { name: "AccountType", prop: "actType" },
    { name: "OpeningBalanceDate", prop: "openingBalDate" },
    { name: "OpeningBalance", prop: "openingBal" },
    { name: "Actions", prop: "Actions" },
  ];

  // private
  private tempData = [];

  constructor(
    public account_service: AccountService,
    private spinner: NgxSpinnerService,
    public _commonService: CommonService,
  ) {
    this.tempData = this.rows;
  }

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * filterUpdate
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.Username.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * updateLimit
   *
   * @param limit
   */
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  Confirm(data: any) {
    let that = this;
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2F8BE6",
        cancelButtonColor: "#F55252",
        confirmButtonText: "Yes, delete it!",
        customClass: {
          confirmButton: "btn btn-warning",
          cancelButton: "btn btn-danger ml-1",
        },
        buttonsStyling: false,
      })
      .then(function (result) {
        if (result.value) {
          data['status'] = "D"
          that.account_service.updateAccount(data).subscribe((ok) => {
            swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "Your record has been deleted.",
              customClass: {
                confirmButton: "btn btn-success",
              },
            });
            that.getAccountdetails();
          });
        } else if (result.dismiss === swal.DismissReason.cancel) {
          swal.fire({
            title: "Cancelled",
            text: "Your record is safe :)",
            icon: "error",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }
      });
  }
  ngOnInit(): void {
    this.getAccountdetails();
    this.exportColumns = this.columns.map((col) => ({
      title: col.name,
      dataKey: col.prop,
    }));
  }
  getAccountdetails() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.account_service.getAccounts().subscribe((ok: any) => {
      this.rows = ok;
      this.rows = this.rows.filter(el => { return !el.status || el.status === "A" });
      this.table.element.click();
      this.rows.forEach(el => { el.openingBalDate = el.openingBalDate ? (this._commonService.dateformat(el.openingBalDate)).split("-").reverse().join("-") : el.openingBalDate });
      this.tempData = this.rows;
      this.spinner.hide();
    });
  }
  exportPdf() {
    let doc = new jsPDF("l", "pt");
    doc.autoTable(this.exportColumns, this.rows);
    doc.save("accounts.pdf");
  }

  exportExcel() {
    const worksheet = xlsx.utils.json_to_sheet(this.rows);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    this.saveAsExcelFile(excelBuffer, "accounts");
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
}
