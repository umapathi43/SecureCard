import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";
import { ManufactureService } from "app/services/manufacture.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-bluck-manufacturer',
  templateUrl: './bluck-manufacturer.component.html',
  styleUrls: ['./bluck-manufacturer.component.scss',
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BluckManufacturerComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      manufacturerName: "",
      status: "A"
    },
  ];
  columns2 = [
    { name: "Name", prop: "manufacturerName" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _manfService: ManufactureService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void { }

  addItem() {
    this.Items.push({
      manufacturerName: "",
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
    this._manfService.addManfacture(this.Items).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Created Sucessfully");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to Create Manufacturer");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
