import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { AreaService } from "app/services/area.service";
import { SalesmanService } from "app/services/salesman.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
export class SalesBoy {
  public salesManName: string;
  public incentive: any;
  public target: number;
  public id: number;
  public areaCreation: any = {
    id: "",
  };
}
@Component({
  selector: "app-addsalesman",
  templateUrl: "./addsalesman.component.html",
  styleUrls: ["./addsalesman.component.scss"],
})
export class AddsalesmanComponent implements OnInit {
  CustomeId: any;
  model = new SalesBoy();
  areaList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _areaService: AreaService,
    private _salesService: SalesmanService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getSalesBoyById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.getAreas();
  }
  goBack() {
    this._location.back();
  }
  onSubmit(form: any) {
    this.model['status'] = "A";
    this._salesService.addSalesman(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Salesman Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Salesman");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getAreas() {
    this._areaService.getAreas().subscribe((ok) => {
      this.areaList = ok;
      this.spinner.hide();
    });
  }
  onUpdate(form: any) {
    // this.submitted = true;
    this._salesService.updateSalesman(this.model).subscribe(
      (ok) => {
        if (ok == "OK") {
          this.toastr.success("Success", "Salesman Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Salesman");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getSalesBoyById() {
    const dta = {
      id: this.CustomeId,
    };
    this._salesService.getSalesmanById(dta).subscribe((ok) => {
      this.model = ok;
      document.getElementById("frmcard").click();
    });
  }
}
