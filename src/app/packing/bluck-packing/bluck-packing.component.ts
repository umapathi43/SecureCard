import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { PackingService } from "../../services/packing.service";

@Component({
  selector: 'app-bluck-packing',
  templateUrl: './bluck-packing.component.html',
  styleUrls: ['./bluck-packing.component.scss',
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BluckPackingComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      packName: "",
      qty: "",
      status: "A"
    },
  ];
  columns2 = [
    { name: "Name", prop: "manufacturerName" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private _packService: PackingService,
  ) { }

  ngOnInit(): void {
  }
  addItem() {
    this.Items.push({
      packName: "",
      qty: "",
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
  onSubmit(form: any) {
    this._packService.bluckAddPack(this.Items).subscribe((ok) => {
      if (ok) {
        this.toastr.success("Success", "Pack Added");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Pack");
      }
    }, (err) => {
      this.toastr.error("Failed", err.error.message);
    });
  }
}
