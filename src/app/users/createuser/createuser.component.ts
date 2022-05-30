import { Component, OnInit } from "@angular/core";
import {
  NgbDateStruct,
  NgbDatepickerI18n,
  NgbCalendar,
} from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "app/services/user.service";
import { ToastrService } from "ngx-toastr";
import { NgbDateParserFormatter, NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateCustomParserFormatter } from "./../../services/date.service";
import { NgxSpinnerService } from "ngx-spinner";
import { CommonService } from "app/services/commonService/common.service";
export class User {
  public customerName: string;
  public mobileNo: string;
  public address1: string;
  public address2: string;
  public gstType: any;
  public gstNo: string;
  public discount: number;
  public rateSlab: number;
  public modeOfPayment: any;
  public creditLimit: number;
  public dueDays: number;
  public openingBal: number;
  public openingBalDate: any;
  public id: number;
}
function padNumber(value: number | null) {
  if (!isNaN(value) && value !== null) {
    return `0${value}`.slice(-2);
  }
  return "";
}

@Component({
  selector: "app-createuser",
  templateUrl: "./createuser.component.html",
  styleUrls: ["./createuser.component.scss"],
})
export class CreateuserComponent implements OnInit {
  readonly DELIMITER = "-";
  popupModel: any;
  CustomeId: any;
  model = new User();
  gstTypeList: any;
  paymentMethodList: any;
  // submitted = false;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _commonService: CommonService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getUserById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.getGstTpes();
    this.getPaymentModes();
  }
  onDateSelection(date: NgbDate) {
    let selectedDate = NgbDateCustomParserFormatter.formatDate(date);
  }
  goBack() {
    this._location.back();
  }
  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log(ok);
      this.gstTypeList = ok;
      this.gstTypeList.forEach((t) => {
        if (t.gstTypeName === "Unregister ") {
          this.model.gstType = t.id;
          document.getElementById("basic-form-6").click();
        }
      });
    });
  }

  getPaymentModes() {
    this._userService.getPaymentModes().subscribe((ok) => {
      console.log(ok);
      this.paymentMethodList = ok;
      this.model.modeOfPayment = 1;
      document.getElementById("basic-form-6").click();
      this.spinner.hide();
    });
  }
  onSubmit(form: any) {
    // this.model.openingBalDate = this.popupModel;
    // this.submitted = true;
    this.model['status'] = "A";
    this._userService.addUser(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "User Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update User");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  onUpdate(form: any) {
    // this.model.openingBalDate = this.popupModel;
    // this.submitted = true;
    this._userService.updateUser(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "User Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update User");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getUserById() {
    const dta = {
      id: this.CustomeId,
    };
    this._userService.getUserById(dta).subscribe((ok) => {
      this.model = ok;
      this.model.openingBalDate = this._commonService.dateformat(ok.openingBalDate?ok.openingBalDate:'')
      document.getElementById("frmcard").click();
    });
  }
  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10),
      };
    }
    return null;
  }

  toModel(date) {
    date = new Date(date);
    let day: any = date.getDate();
    let month: any = date.getMonth() + 1;
    let year: any = date.getFullYear();
    day = day.toString().length == 2 ? day : "0" + day;
    month = month.toString().length == 2 ? month : "0" + month;
    let value = day + "-" + month + "-" + year;
    return value ? value : null;
  }
  mobileNumber(event) {
    const pattern = /^[0-9]$/;
    let input = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(input)) {
      event.preventDefault();
    }
  }
  gstValidation(action) {
    if (!action) {
      this.model.gstType = 1;
      document.getElementById("basic-form-6").click();
    } else {
      this.model.gstType = 3;
    }
  }
}
