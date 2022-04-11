import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AccountService } from "app/services/account.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
@Component({
  selector: "app-bulk-create-accounts",
  templateUrl: "./bulk-create-accounts.component.html",
  styleUrls: [
    "./bulk-create-accounts.component.scss",
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BulkCreateAccountsComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      actGroup: "",
      actType: "",
      openingBal: "",
      openingBalDate: "",
      actName: "",
    },
  ];
  columns2 = [
    { name: "Account Head", prop: "actGroup" },
    { name: "Account Type", prop: "actType" },
    { name: "openingBal", prop: "openingBal" },
    { name: "openingBalDate", prop: "openingBalDate" },
    { name: "Name", prop: "actName" },
  ];
  routeList: any;
  accHeadArray: any;
  accTypeArray: any;
  constructor(
    private account_service: AccountService,
    private _location: Location,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.accountHeaddetails();
    this.accountTypeDetails();
  }

  ngOnInit(): void {}

  addItem() {
    this.Items.push({
      actGroup: "",
      actType: "",
      openingBal: "",
      openingBalDate: "",
      actName: "",
    });
    this.Items = [...this.Items];
  }
  accountHeaddetails() {
    this.account_service.getAccountHead().subscribe((ok: any) => {
      if (ok) {
        this.accHeadArray = ok.filter(
          (t) => t.status == "A" || t.status == "1"
        );
      } else {
        this.accHeadArray = [];
      }
    });
  }
  accountTypeDetails() {
    this.account_service.getAccountType().subscribe((ok: any) => {
      if (ok) {
        this.accTypeArray = ok.filter(
          (t) => t.status == "A" || t.status == "1"
        );
      } else {
        this.accTypeArray = [];
      }
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
    this.account_service.addAccount(this.Items).subscribe(
      (ok: any) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "Account Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Account");
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
