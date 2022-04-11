import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";

@Component({
  selector: "app-sales-register-report-monthly",
  templateUrl: "./sales-register-report-monthly.component.html",
  styleUrls: ["./sales-register-report-monthly.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SalesRegisterReportMonthlyComponent implements OnInit {
  public limitRef = 10;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  tempData: any;
  public ColumnMode = ColumnMode;
  rows = [
    { legderName: "test", station: "empty", balance: 666, id: 1 },
    { legderName: "test", station: "empty", balance: 66, id: 2 },
    { legderName: "test", station: "empty", balance: 6, id: 3 },
    { legderName: "test", station: "empty", balance: 798, id: 4 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
    { legderName: "test", station: "empty", balance: 876, id: 5 },
  ];
  // column header
  public columns = [
    { name: "ledger", prop: "legderName" },
    { name: "station", prop: "station" },
    { name: "balance", prop: "balance" },
  ];
  constructor(public location: Location, public route: Router) {}

  ngOnInit(): void {}
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
  goBack() {
    this.location.back();
  }
}
