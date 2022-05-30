import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AreaService } from "app/services/area.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
@Component({
  selector: "app-bulk-create-area",
  templateUrl: "./bulk-create-area.component.html",
  styleUrls: [
    "./bulk-create-area.component.scss",
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BulkCreateAreaComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      areaName: "",
      route: "",
    },
  ];
  columns2 = [
    { name: "Name", prop: "areaName" },
    { name: "Route", prop: "route" },
  ];
  routeList: any;
  constructor(
    private _areaService: AreaService,
    private _location: Location,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.getRoutes();
  }

  ngOnInit(): void {}

  addItem() {
    this.Items.push({
      areaName: "",
      route: "",
    });
    this.Items = [...this.Items];
  }

  getRoutes() {
    this._areaService.getRoutes().subscribe((ok) => {
      this.routeList = ok;
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
    this._areaService.addBulkAreas(this.Items).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "Area Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Area");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
