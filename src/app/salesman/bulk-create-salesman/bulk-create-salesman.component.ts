import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AreaService } from "app/services/area.service";
import { Location } from "@angular/common";
import { SalesmanService } from "app/services/salesman.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-bulk-create-salesman",
  templateUrl: "./bulk-create-salesman.component.html",
  styleUrls: ["./bulk-create-salesman.component.scss"],
})
export class BulkCreateSalesmanComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      salesManName: "",
      incentive: "",
      target: "",
      areaCreation: {
        id: "",
      },
    },
  ];
  columns2 = [
    { name: "Name", prop: "salesManName" },
    { name: "Incentives", prop: "incentive" },
    { name: "To Amount", prop: "target" },
    { name: "Area", prop: "area" },
  ];
  routeList: any;
  areaList: any;
  constructor(
    private _location: Location,
    private _areaService: AreaService,
    private _salesService: SalesmanService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.getAreas();
  }

  ngOnInit(): void {}

  addItem() {
    this.Items.push({
      salesManName: "",
      incentive: "",
      target: "",
      areaCreation: {
        id: "",
      },
    });
    this.Items = [...this.Items];
  }

  getAreas() {
    this._areaService.getAreas().subscribe((ok) => {
      this.areaList = ok;
    });
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  goBack() {
    this._location.back();
  }

  onSubmit() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._salesService.addBulkSalesmans(this.Items).subscribe(
      (ok) => {
        this.spinner.hide();
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Salesman Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Salesman");
        }
      },
      (err) => {
        this.spinner.hide();
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
