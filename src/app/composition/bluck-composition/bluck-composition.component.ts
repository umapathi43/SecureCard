import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { CompositionService } from "../../services/composition.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-bluck-composition',
  templateUrl: './bluck-composition.component.html',
  styleUrls: ['./bluck-composition.component.scss',
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BluckCompositionComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      compName: "",
      status: "A"
    },
  ];
  columns2 = [
    { name: "Name", prop: "compName" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _compositionService: CompositionService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
  }
  ngOnInit(): void {
  }
  addItem() {
    this.Items.push({
      compName: "",
      status: "A",
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
    this._compositionService.bluckAddComposition(this.Items).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Composition Added");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to add Composition");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
}
