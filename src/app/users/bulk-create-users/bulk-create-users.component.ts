import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { UserService } from "app/services/user.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
@Component({
  selector: "app-bulk-create-users",
  templateUrl: "./bulk-create-users.component.html",
  styleUrls: ["./bulk-create-users.component.scss"],
})
export class BulkCreateUsersComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      mobileNo: "",
      address1: "",
      openingBal: "",
      openingBalDate: "",
      customerName: "",
      address2: "",
      gstType: "",
      gstNo: "",
      discount: "",
      rateSlab: "",
      modeOfPayment: "",
      creditLimit: "",
      dueDays: "",
    },
  ];
  columns2 = [
    { name: "Mobile", prop: "mobileNo" },
    { name: "Address1", prop: "address1" },
    { name: "openingBal", prop: "openingBal" },
    { name: "openingBalDate", prop: "openingBalDate" },
    { name: "Name", prop: "supplierName" },
    { name: "Address2", prop: "address2" },
    { name: "GstType", prop: "gstType" },
    { name: "Gstno", prop: "gstno" },
    { name: "Discount", prop: "discount" },
    { name: "Rateslab", prop: "rateslab" },
    { name: "Modeofpayment", prop: "modeofpayment" },
    { name: "CreditLimit", prop: "creditLimit" },
    { name: "DueDays", prop: "dueDays" },
  ];
  routeList: any;
  accHeadArray: any;
  accTypeArray: any;
  paymentMethodList: any;
  gstTypeList: any;
  constructor(
    private _userService: UserService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _location: Location
  ) {
    this.getGstTpes();
    this.getPaymentModes();
  }

  ngOnInit(): void {}

  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log(ok);
      this.gstTypeList = ok;
    });
  }

  getPaymentModes() {
    this._userService.getPaymentModes().subscribe((ok) => {
      console.log(ok);
      this.paymentMethodList = ok;
    });
  }

  addItem() {
    this.Items.push({
      mobileNo: "",
      actGroup: "",
      address1: "",
      actType: "",
      openingBal: "",
      openingBalDate: "",
      supplierName: "",
      address2: "",
      gstType: "",
      gstNo: "",
      discount: "",
      rateSlab: "",
      modeOfPayment: "",
      creditLimit: "",
      dueDays: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  goBack() {
    this._location.back();
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
      // this.model.gstType = 1;
      document.getElementById("basic-form-6").click();
    } else {
      // this.model.gstType = 3;
    }
  }

  onSubmit() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._userService.addBulkUsers(this.Items).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "User Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update User");
        }
      },
      (err) => {
        this.spinner.hide();
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
