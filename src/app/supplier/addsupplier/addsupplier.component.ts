import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { NgbActiveModal, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "app/services/user.service";
import { SupplierService } from "app/services/supplier.service";
import { ToastrService } from "ngx-toastr";
import { CommonService } from "app/services/commonService/common.service";
import { NgxSpinnerService } from "ngx-spinner";
export class Supplier {
  public supplierName: string;
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
@Component({
  selector: "app-add-supplier",
  templateUrl: "./addsupplier.component.html",
  styleUrls: ["./addsupplier.component.scss"],
})
export class AddsupplierComponent implements OnInit {
  @Output() backbutton = new EventEmitter();
  @Input() add_supplier: any;
  readonly DELIMITER = "-";
  popupModel: any;
  CustomeId: any;
  @Input() data: any;
  @Input() id: number;
  model = new Supplier();
  gstTypeList: any;
  paymentMethodList: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _userService: UserService,
    private _supplierService: SupplierService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
    public _commonService: CommonService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getSupplierById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (this.id == 0) {
      this.isModal = true;
      console.log(this.data);
      this.model.supplierName = this.data.hsnName;
    }
    if (this.add_supplier) {
      this.model.supplierName = this.add_supplier;
    }
    this.getGstTpes();
    this.getPaymentModes();
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.supplierName);
    } else if (this.add_supplier) {
      this.backbutton.emit(false);
    } else {
      this._location.back();
    }
  }
  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log(ok);
      this.gstTypeList = ok;
      this.model.gstType = 3;
      document.getElementById("basic-form-6").click();
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
    this.model['status'] = "A";
    this._supplierService.addSupplier(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok) {
          this.toastr.success("Success", "Supplier Updated");
          if (this.isModal) {
            this.activeModal.close(this.model.supplierName);
          } else if (this.add_supplier) {
            this.backbutton.emit(true);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to update Supplier");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  onUpdate(form: any) {
    console.log("clicked");
    // this.model.openingBalDate = this.popupModel;
    console.log(this.model);
    // this.submitted = true;
    this._supplierService.updateSupplier(this.model).subscribe(
      (ok) => {
        console.log(ok);
        if (ok == "OK") {
          this.toastr.success("Success", "Supplier Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Supplier");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getSupplierById() {
    const dta = {
      id: this.CustomeId,
    };
    this._supplierService.getSupplierById(dta).subscribe((ok) => {
      this.model = ok;
      this.model.openingBalDate = this._commonService.dateformat(ok.openingBalDate?ok.openingBalDate:'')
      document.getElementById("frmcard").click();
      this.popupModel = this.fromModel(this.model.openingBalDate);
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

  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : null;
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
