import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { CompositionService } from "app/services/composition.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { NgxSpinnerService } from "ngx-spinner";
export class Composition {
  id: number;
  compName: string;
}
@Component({
  selector: "app-addcomposition",
  templateUrl: "./addcomposition.component.html",
  styleUrls: ["./addcomposition.component.scss"],
})
export class AddcompositionComponent implements OnInit {
  CustomeId: any;
  model = new Composition();
  @Input() id: number;
  @Input() data: any;
  isModal: boolean;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _compositionService: CompositionService,
    private toastr: ToastrService,
    public activeModal: NgbActiveModal,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getCompositionById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (this.id == 0) {
      this.isModal = true;
      this.model.compName = this.data.compName;
    }
    if(!this.CustomeId){
      this.spinner.hide()
    }
  }
  goBack() {
    if (this.isModal) {
      this.activeModal.close(this.model.compName);
    } else {
      this._location.back();
    }
  }

  onSubmit(form: any) {
    this.model['status'] = "A";
    this._compositionService.addComposition(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Composition Added");
          if (this.isModal) {
            this.activeModal.close(this.model.compName);
          } else {
            this._location.back();
          }
        } else {
          this.toastr.error("Failed", "Failed to add Composition");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  onUpdate(form: any) {
    // this.submitted = true;
    this._compositionService.updateComposition(this.model).subscribe(
      (ok) => {
        if (ok) {
          this.toastr.success("Success", "Composition Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Composition");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getCompositionById() {
    const dta = {
      id: this.CustomeId,
    };
    this._compositionService.getCompositionById(dta).subscribe((ok) => {
      this.model = ok;
      document.getElementById("frmcard").click();
      this.spinner.hide();
    });
  }
}
