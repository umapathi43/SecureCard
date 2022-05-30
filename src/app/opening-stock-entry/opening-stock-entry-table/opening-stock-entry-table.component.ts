import { AreaService } from "./../../services/area.service";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { DatatableComponent, ColumnMode } from "@swimlane/ngx-datatable";
import swal from "sweetalert2";
import * as xlsx from "xlsx";
import * as FileSaver from "file-saver";
import { NgxSpinnerService } from "ngx-spinner";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { renderFlagCheckIfStmt } from "@angular/compiler/src/render3/view/template";
declare var jsPDF: any;

@Component({
  selector: "app-opening-stock-entry-table",
  templateUrl: "./opening-stock-entry-table.component.html",
  styleUrls: ["./opening-stock-entry-table.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class OpeningStockEntryTableComponent implements OnInit {
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
    { name: "No of Items", prop: "noItems" },
    { name: "Discount %", prop: "discount" },
    { name: "Discount Amount", prop: "discAmount" },
    { name: "Gross Amounts", prop: "grossAmounts" },
    { name: "Net Amount", prop: "netAmount" },
  ];

  // private
  private tempData = [];

  constructor(
    private spinner: NgxSpinnerService,
    public _areaService: AreaService,
    private _purchaseService: PurchaseEntryService
  ) {}

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
      return d.areaName.toLowerCase().indexOf(val) !== -1 || !val;
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

  ngOnInit(): void {
    this.exportColumns = this.columns.map((col) => ({
      title: col.name,
      dataKey: col.prop,
    }));
    this.getOpenStock();
  }

  exportPdf() {
    let doc = new jsPDF("l", "pt");
    doc.autoTable(this.exportColumns, this.rows);
    doc.save("areas.pdf");
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
  getOpenStock() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._purchaseService.getOpenStockEntry().subscribe((ok: any) => {
      const res = ok;
      this.rows = ok;
      this.tempData = this.rows;
      this.table.element.click();
      this.spinner.hide();
    });
  }
}
