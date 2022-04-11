import * as Chartist from "chartist";
import { ChartType, ChartEvent } from "ng-chartist";
import ChartistTooltip from "chartist-plugin-tooltips-updated";
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";

declare var require: any;

const data: any = require("../../shared/data/chartist.json");

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
  // plugins?: any;
}
@Component({
  selector: "app-sales-register-report",
  templateUrl: "./sales-register-report.component.html",
  styleUrls: ["./sales-register-report.component.scss"],
})
export class SalesRegisterReportComponent implements OnInit {
  public limitRef = 10;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  tempData: any;
  public ColumnMode = ColumnMode;

  rows = [
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
    {
      Month: "April",
      Debit: "empty",
      credit: 666,
      id: 1,
      monthlyBalance: 0,
      commulative: 0,
    },
  ];
  // column header
  public columns = [
    { name: "Date", prop: "legderName" },
    { name: "vocherType", prop: "station" },
    { name: "debit", prop: "balance" },
    { name: "debit", prop: "balance" },
    { name: "debit", prop: "balance" },
    { name: "debit", prop: "balance" },
  ];
  constructor(public location: Location, public route: Router) {}

  ngOnInit(): void {}
  lineArea2: Chart = {
    type: "Line",
    data: data["lineArea2"],
    options: {
      showArea: true,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.none(),
      axisX: {
        showGrid: false,
      },
      axisY: {
        low: 0,
        scaleMinSpace: 50,
      },
      plugins: [
        ChartistTooltip({
          appendToBody: true,
          pointClass: "ct-point-circle",
        }),
      ],
    },
    responsiveOptions: [
      [
        "screen and (max-width: 640px) and (min-width: 381px)",
        {
          axisX: {
            labelInterpolationFnc: function (value, index) {
              return index % 2 === 0 ? value : null;
            },
          },
        },
      ],
      [
        "screen and (max-width: 380px)",
        {
          axisX: {
            labelInterpolationFnc: function (value, index) {
              return index % 3 === 0 ? value : null;
            },
          },
        },
      ],
    ],
    events: {
      created(data: any): void {
        var defs = data.svg.elem("defs");
        defs
          .elem("linearGradient", {
            id: "gradient2",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0,
            "stop-opacity": "0.2",
            "stop-color": "transparent",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-opacity": "0.2",
            "stop-color": "#60AFF0",
          });

        defs
          .elem("linearGradient", {
            id: "gradient3",
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0,
          })
          .elem("stop", {
            offset: 0.3,
            "stop-opacity": "0.2",
            "stop-color": "transparent",
          })
          .parent()
          .elem("stop", {
            offset: 1,
            "stop-opacity": "0.2",
            "stop-color": "#6CD975",
          });
      },
      draw(data: any): void {
        var circleRadius = 4;
        if (data.type === "point") {
          var circle = new Chartist.Svg("circle", {
            cx: data.x,
            cy: data.y,
            r: circleRadius,
            "ct:value": data.value.y,
            "ct:meta": data.meta,
            style: "pointer-events: all !important",
            class: "ct-point-circle",
          });
          data.element.replace(circle);
        } else if (data.type === "label") {
          // adjust label position for rotation
          const dX = data.width / 2 + (30 - data.width);
          data.element.attr({ x: data.element.attr("x") - dX });
        }
      },
    },
  };
  updateLimit(limit) {
    this.limitRef = limit.target.value;
  }
  goBack() {
    this.location.back();
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
  detailsPage(event) {
    if (event.type == "click") {
      this.route.navigate(["/reports/sales_monthly_report", event.row.id]);
      console.log(event.row);
    }
  }
}
