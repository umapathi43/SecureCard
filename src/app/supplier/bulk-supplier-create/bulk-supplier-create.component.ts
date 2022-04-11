import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { UserService } from "app/services/user.service";
import { Location } from "@angular/common";
import { SupplierService } from "app/services/supplier.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-bulk-supplier-create",
  templateUrl: "./bulk-supplier-create.component.html",
  styleUrls: [
    "./bulk-supplier-create.component.scss",
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BulkSupplierCreateComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      mobileNo: "",
      address1: "",
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
    private _location: Location,
    private _supplierService: SupplierService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
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

  onSubmit() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._supplierService.addBulkSuppliers(this.Items).subscribe(
      (ok) => {
        this.spinner.hide();
        this._location.back();
        console.log(ok);
        if (ok) {
          this.toastr.success("Success", "Supplier Updated");
          this;
        } else {
          this.toastr.error("Failed", "Failed to update Supplier");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
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
}
