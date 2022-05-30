import { AccountService } from "./../../services/account.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "../../services/commonService/common.service";
import { NgxSpinnerService } from "ngx-spinner";
export class Account {
  public actGroup: string;
  public actType: any;
  public openingBal: any;
  public openingBalDate: any;
  public actName: any;
  public id: number;
}
@Component({
  selector: "app-createaccount",
  templateUrl: "./createaccount.component.html",
  styleUrls: ["./createaccount.component.scss"],
})
export class CreateaccountComponent implements OnInit {
  popupModel: any;
  CustomeId: any;
  readonly DELIMITER = "-";
  model = new Account();
  accHeadArray: any[];
  accTypeArray: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    public account_service: AccountService,
    private toastr: ToastrService,
    private _commonService: CommonService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.CustomeId = this.actRoute.snapshot.params.id;
    this.accountTypeDetails();
    this.accountHeaddetails();
    if (this.CustomeId) {
      this.getAccountDetailsById();
    }
  }
  goBack() {
    this._location.back();
  }
  createAcount() {
    // this.model.openingBalDate = this.popupModel;
    this.model['status'] = "A";
    var req = this.model;
    this.account_service.addAccount(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.toastr.success("Success", "Account Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Account");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getAccountDetailsById() {
    this.account_service.getAccountById(this.CustomeId).subscribe((ok: any) => {
      debugger
      this.model = ok;
      this.model.openingBalDate = this._commonService.dateformat(ok.openingBalDate?ok.openingBalDate:'')
      document.getElementById("frmcard").click();
      this.spinner.hide();
    });
  }
  onUpdate() {
    this.account_service.updateAccount(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Account Slab Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Account Slab");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  accountHeaddetails() {
    this.account_service.getAccountHead().subscribe((ok: any) => {
      if (ok) {
        this.accHeadArray = ok.filter((t) => t.status == "A" || t.status == "1");
      } else {
        this.accHeadArray = [];
      }
      this.spinner.hide();
    });
  }
  accountTypeDetails() {
    this.account_service.getAccountType().subscribe((ok: any) => {
      if (ok) {
        this.accTypeArray = ok.filter((t) => t.status == "A" || t.status == "1");
      } else {
        this.accTypeArray = [];
      }
      this.spinner.hide();
    });
  }
  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : null;
  }
}
