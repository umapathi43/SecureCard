import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "app/services/commonService/common.service";
export class PaymentEntry {
  public paymentDate: string;
  public amount: string;
  public refernceNumber: string;
  public refernceDate: string;
  status: string;
}
@Component({
  selector: "app-paymententry",
  templateUrl: "./paymententry.component.html",
  styleUrls: [
    "./paymententry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class PaymententryComponent implements OnInit, AfterViewInit {
  showFields: any;
  paymentId: any;
  updatedRes: any;
  constructor(
    private _purchaseEntryService: PurchaseEntryService,
    private _location: Location,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    private commonService: CommonService
  ) {
    this.paymentId = this.actRoute.snapshot.params.id;
  }
  ngAfterViewInit(): void {
    if (this.paymentId) {
      this.getPaymentDetailsById();
    }
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  exportColumns: any;
  rows: any[] = [
    {
      itemName: "dean3004",
      qty: "2",
      schemeQty: "2",
      purchaseRate: "2",
      discount: "2",
      billDate: "2020-12-12",
      supplierName: "dean3004",
    },
  ];
  model = new PaymentEntry();
  public Items: any[] = [
    {
      creditType: "",
      entryAmount: "",
      entryDicount: "",
      netAmount: "",
      // qty: "",
      // freeQty: "",
      // mrp: "",
      // purchaseDate: "",
      // discount: "",
      // discAmount: "",
      // schdiscAmount: "",
      // gst: "",
      // taxAmount: "",
      // qpk: "",
      // srt: "",
      // grossAmt: "",
      // netAmt: "",
    },
  ];
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  columns = [
    { name: "Credit Type", prop: "creditType" },
    { name: "Amount", prop: "amount" },
    { name: "Discount", prop: "discount" },
    { name: "Net Amount", prop: "netAmount" },
  ];
  columns2 = [
    { name: "name", prop: "name" },
    { name: "batch", prop: "batch" },
    { name: "expiryDate", prop: "expiryDate" },
    { name: "mfgDate", prop: "mfgDate" },
  ];
  // model = new Purchase();
  ColumnMode = ColumnMode;

  ngOnInit(): void { }
  addItem() {
    this.Items.push({
      creditType: "",
      amount: "",
      discount: "",
      netAmount: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }

  onSubmit() {
    let req = this.model;
    req["paymentEntryDetails"] = this.Items;
    this.spinner.show();
    this._purchaseEntryService.addPaymentEntry(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate() {
    console.log(this.model);
    let req = this.model;
    req["paymentEntryDetails"] = this.Items;
    this.model.status = "A";
    this.spinner.show();
    this._purchaseEntryService.updatePaymentEntry(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  getPaymentDetailsById() {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this._purchaseEntryService
      .getPaymentId(this.paymentId)
      .subscribe((ok: any) => {
        this.spinner.hide();
        this.updatedRes = ok;
        this.model = this.updatedRes;
        this.model.paymentDate = this.commonService.dateformat(
          this.updatedRes.paymentDate
        );
        this.model.refernceDate = this.commonService.dateformat(
          this.updatedRes.refernceDate
        );
        this.Items = this.updatedRes.paymentEntryDetails;
        document.getElementById("tooltip-validation").click();
        document.getElementById("ngx-datatable-filter").click();
        document.getElementById("basic-form-layouts").click();
      });
  }

  goBack() {
    this._location.back();
  }
  removeAll(action, eventt) {
    // let val;
    // let  input = document.getElementById('paymentDate');
    if (eventt.keyCode == 8) {
      this.model.paymentDate = null;
    }
    if (action) {
      let val = action.split('-');
      if (val[0] < '2022' || val[0] > '2050' || val[0].length > 4) {
        val[0] = '2022';
        let date = val.join('-');
        this.model.paymentDate = date;
      }
    }
    // input.onkeydown = function(event) {
    //     var key = event.keyCode || event.charCode;
    //     if( key == 8 ){
    //       //backspace pressed
    //       val= true;
    //     }
    // };
    // if(val){
    //   this.model.paymentDate = null;
    // }
  }
}
