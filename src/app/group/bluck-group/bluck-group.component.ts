import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
import { GroupService } from "../../services/group.service";

@Component({
  selector: 'app-bluck-group',
  templateUrl: './bluck-group.component.html',
  styleUrls: ['./bluck-group.component.scss',
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BluckGroupComponent implements OnInit {
  ColumnMode = ColumnMode;
  public Items: any[] = [
    {
      groupName: "",
      status: "A"
    },
  ];
  columns2 = [
    { name: "Name", prop: "groupName" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _grpService: GroupService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void { }

  addItem() {
    this.Items.push({
      groupName: "",
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
    this._grpService.bluckAddGroup(this.Items).subscribe(
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
