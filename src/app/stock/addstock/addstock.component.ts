import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { StockService } from "app/services/stock.service";
import { BranchService } from "app/services/branch.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
export class Stock {
  public stockName: string;
  public id: any;
  public barnchCreation: any = {
    id: "",
  };
}
@Component({
  selector: "app-addstock",
  templateUrl: "./addstock.component.html",
  styleUrls: ["./addstock.component.scss"],
})
export class AddstockComponent implements OnInit {
  CustomeId: any;
  model = new Stock();
  branchList: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _stockService: StockService,
    private _branchService: BranchService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getStockById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.getBranches();
  }
  goBack() {
    this._location.back();
  }

  onSubmit(form: any) {
    this.model['status'] = "A";
    // this.submitted = true;
    this._stockService.addStock(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok) {
          this.toastr.success("Success", "Stock Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Stock");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getBranches() {
    this._branchService.getBranchs().subscribe((ok) => {
      this.branchList = ok;
      this.spinner.hide();
    });
  }
  onUpdate(form: any) {
   
    // this.submitted = true;
    this._stockService.updateStock(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Stock Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Stock");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getStockById() {
    const dta = {
      id: this.CustomeId,
    };
    this._stockService.getStockById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcbdy").click();
    });
  }
}
