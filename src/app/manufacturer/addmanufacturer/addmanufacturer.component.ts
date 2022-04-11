import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ManufactureService } from "app/services/manufacture.service";
import { ToastrService } from "ngx-toastr";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
export class Manufacturer {
  public id: number;
  public manufacturerName: string;
}
@Component({
  selector: "app-addmanufacturer",
  templateUrl: "./addmanufacturer.component.html",
  styleUrls: ["./addmanufacturer.component.scss"],
})
export class AddmanufacturerComponent implements OnInit {
  CustomeId: any;
  model = new Manufacturer();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _manfService: ManufactureService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getManufactureById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (this.id == 0) {
      this.isModal = true;
      this.model.manufacturerName = this.data.manufacturerName;
    }
    if(!this.CustomeId){
      this.spinner.hide()
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.manufacturerName);
    } else {
      this._location.back();
    }
  }
  onSubmit(form: any) {
    this.model['status'] = "A";
    this._manfService.addManfacture(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Stock Updated");
          if (this.isModal) {
            this.activeModal.close(this.model.manufacturerName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to update Stock");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate(form: any) {
    // this.submitted = true;
    this._manfService.updateManfacture(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Stock Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Stock");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getManufactureById() {
    const dta = {
      id: this.CustomeId,
    };
    this._manfService.getManfactureById(dta).subscribe((ok) => {
      console.log(ok);
      this.model = ok;
      document.getElementById("frmcbdy").click();
      this.spinner.hide();
    });
  }
}
