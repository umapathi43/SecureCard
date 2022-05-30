import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { DiscountslabService } from "app/services/discountslab.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
@Component({
  selector: "app-bulk-create-discountslab",
  templateUrl: "./bulk-create-discountslab.component.html",
  styleUrls: [
    "./bulk-create-discountslab.component.scss",
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BulkCreateDiscountslabComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      discountSlabName: "",
      from_amt: "",
      to_amt: "",
      discount: "",
    },
  ];
  columns2 = [
    { name: "Name", prop: "discountSlabName" },
    { name: "From Amount", prop: "from_amt" },
    { name: "To Amount", prop: "to_amt" },
    { name: "Discount", prop: "discount" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _discountService: DiscountslabService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  addItem() {
    this.Items.push({
      discountSlabName: "",
      from_amt: "",
      to_amt: "",
      discount: "",
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
    this._discountService.addDiscount(this.Items).subscribe(
      (ok) => {
        this.spinner.hide();
        console.log(ok);
        if (ok) {
          this.toastr.success("Success", "Discount Slab Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Discount Slab");
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
