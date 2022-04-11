import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { HsnandsacService } from "app/services/hsnandsac.service";

@Component({
  selector: 'app-bluck-hsnsac',
  templateUrl: './bluck-hsnsac.component.html',
  styleUrls: ['./bluck-hsnsac.component.scss',
  "../../../assets/sass/libs/datatables.scss",
],
encapsulation: ViewEncapsulation.None,
})
export class BluckHsnsacComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      hsnName: "",
      descirption: "",
      status: "A"
    },
  ];
  columns2 = [
    { name: "Name", prop: "hsnName" },
    { name: "Descirption", prop: "descirption" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _hsnService: HsnandsacService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void { }

  addItem() {
    this.Items.push({
      hsnName: "",
      descirption: "",
      status: "A"
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  goBack() {
    this._location.back();
  }

  onSubmit(form) {
    this._hsnService.bluckAddHSN(this.Items).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Created Sucessfully");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to Create Group");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

}
