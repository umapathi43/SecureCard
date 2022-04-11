import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { StoretypeService } from "app/services/storetype.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
export class storeType {
  public storeTypeName: string;
  public id: number;
}
@Component({
  selector: "app-addstoretype",
  templateUrl: "./addstoretype.component.html",
  styleUrls: ["./addstoretype.component.scss"],
})
export class AddstoretypeComponent implements OnInit {
  CustomeId: any;
  model = new storeType();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _storeService: StoretypeService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getStoreTypeById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (this.id == 0) {
      this.isModal = true;
      this.model.storeTypeName = this.data.storeTypeName;
    }
    if(!this.CustomeId){
      this.spinner.hide()
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.storeTypeName);
    } else {
      this._location.back();
    }
  }
  onSubmit(form: any) {
    // this.submitted = true;
    this.model['status'] = "A";
    this._storeService.addStoreType(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Storetype Added");
          if (this.isModal) {
            this.activeModal.close(this.model.storeTypeName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to update Storetype");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate(form: any) {
    // this.submitted = true;
    this._storeService.updateStoreType(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Storetype Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Storetype");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getStoreTypeById() {
    const dta = {
      id: this.CustomeId,
    };
    this._storeService.getStoreTypeById(dta).subscribe((ok) => {
      this.model = ok;
      document.getElementById("frmcard").click();
      this.spinner.hide();
    });
  }
}
