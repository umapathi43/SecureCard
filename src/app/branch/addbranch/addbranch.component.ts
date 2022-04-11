import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { BranchService } from "app/services/branch.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
export class Branch {
  public branchName: string;
  public addreess: any;
  public id: number;
  public contact_name: string;
  public mobileNo: any;
  public location: number;
}
@Component({
  selector: "app-addbranch",
  templateUrl: "./addbranch.component.html",
  styleUrls: ["./addbranch.component.scss"],
})
export class AddbranchComponent implements OnInit {
  CustomeId: any;
  model = new Branch();
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _branchService: BranchService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getBranchById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if(!this.CustomeId){
      this.spinner.hide()
    }
  }
  goBack() {
    this._location.back();
  }
  onSubmit(form: any) {
    this.model['status'] = "A";
    this._branchService.addBranch(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Branch Added");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to add Branch");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  onUpdate(form: any) {
    // this.submitted = true;
    this._branchService.updateBranch(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Branch Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Branch");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getBranchById() {
    const dta = {
      id: this.CustomeId,
    };
    this._branchService.getBranchById(dta).subscribe((ok) => {
      this.model = ok;
      document.getElementById("frmcard").click();
      this.spinner.hide();
    });
  }
  mobileNumber(event) {
    const pattern = /^[0-9]$/;
    let input = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(input)) {
      event.preventDefault();
    }
  }
}
