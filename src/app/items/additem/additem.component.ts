import { NgForm } from "@angular/forms";
import { ItemService } from "./../../services/item.service";
import { filter } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PackingService } from "app/services/packing.service";
import { CreatepackingComponent } from "app/packing/createpacking/createpacking.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ManufactureService } from "app/services/manufacture.service";
import { AddmanufacturerComponent } from "app/manufacturer/addmanufacturer/addmanufacturer.component";
import { SchedulerService } from "app/services/scheduler.service";
import { AddscheduleComponent } from "app/schedule/addschedule/addschedule.component";
import { CompositionService } from "app/services/composition.service";
import { AddcompositionComponent } from "app/composition/addcomposition/addcomposition.component";
import { DiscountslabService } from "app/services/discountslab.service";
import { AdddiscountslabComponent } from "app/discountslab/adddiscountslab/adddiscountslab.component";
import { HsnandsacService } from "app/services/hsnandsac.service";
import { AddhsnsacComponent } from "app/hsnsac/addhsnsac/addhsnsac.component";
import { UserService } from "app/services/user.service";
import { GroupService } from "app/services/group.service";
import { AddgroupComponent } from "app/group/addgroup/addgroup.component";
import { AddstoretypeComponent } from "app/storetype/addstoretype/addstoretype.component";
import { StoretypeService } from "app/services/storetype.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";
export class addItem {
  public itemName: string;
  public packName: any;
  public qty_per_pack: any;
  public manufactureEntity: any = {
    id: "",
  };
  public groupEntity: any = {
    id: "",
  };
  public storeTypeEntity: any = {
    id: "",
  };
  public scheduleEntity: any = {
    id: "",
  };
  public compositionEntity: any = {
    id: "",
  };
  public hsnsac: any = {
    id: "",
  };
  public min_amt: any;
  public max_amt: any;
  public min_qty: any;
  public max_qty: any;
  public rateA: any;
  public rateB: any;
  public rateC: any;
  public rateD: any;
  public discSalbEntity: any = {
    id: "",
  };
  public gstType: any;
  public status: "A";
}
@Component({
  selector: "app-additem",
  templateUrl: "./additem.component.html",
  styleUrls: ["./additem.component.scss"],
})
export class AdditemComponent implements OnInit {
  model = new addItem();
  popupModel: Date;
  CustomeId: any;
  packList: any;
  selectedPack: any;
  selectedManf: any;
  selectedGST: any;
  manfList: any;
  schList: any;
  selectedSch: any;
  compList: any;
  selectedComp: any;
  selectedDisc: any;
  packName: any;
  discountList: any;
  discountSlabName: any;
  hsnList: any;
  selectedHSN: any;
  hsnName: any;
  gstTypeList: any;
  manufacturerName: any;
  selectedGrp: any;
  grpList: any;
  groupName: any;
  storeTypeName: any;
  strTypeList: any;
  selectedStrtype: any;
  schedulerName: any;
  cName: any;
  qytPerPack: any;
  addMFG: boolean;
  groupFlag: boolean;
  stroeFlag: boolean;
  schedulFlag: boolean;
  compFlag: boolean;
  hsnFlag: boolean;
  discountFlag: boolean;
  packageFlag: boolean;
  editItem: any;
  constructor(
    private _location: Location,
    private actRoute: ActivatedRoute,
    private _packService: PackingService,
    private modalService: NgbModal,
    private _manfService: ManufactureService,
    private _scheduleService: SchedulerService,
    private _compositionService: CompositionService,
    private _discountService: DiscountslabService,
    private _hsnService: HsnandsacService,
    private _userService: UserService,
    private _grpService: GroupService,
    private _strService: StoretypeService,
    private itemService: ItemService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getItemDetailsById();
    }
  }

  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.getPackings();
    this.getManufacture();
    this.getSchedules();
    this.getComposition();
    this.getDiscountSlabs();
    this.getHsns();
    this.getGstTpes();
    this.getGroups();
    this.getStoreTypes();
  }
  getItemDetailsById() {
    this.itemService.getItemDetailsById(this.CustomeId).subscribe((ok: any) => {
      this.editItem = ok;
      this.model = this.editItem;
      this.model.gstType = this.editItem.gst.toString();
    });
  }
  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      this.gstTypeList = ok;
      // this.model.gst = "Unregister ";
      // this.model.gstType = "Unregister ";
     document.getElementById("frmcard").click();
     this.spinner.hide();
    });
  }

  getGroups() {
    this._grpService.getGroups().subscribe((ok) => {
      this.grpList = ok;
      if (this.groupName) {
        this.model.groupEntity.id = this.grpList.find(
          (x) => x.groupName === this.groupName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  AddGrp(action) {
    if (this.groupFlag) {
      const modalRef = this.modalService.open(AddgroupComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { groupName: this.groupName }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getGroups();
          this.groupFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  OnGrpChange(event) {
    this.groupName = event.term;
    if (event.items.length == 0) {
      this.groupFlag = true;
    } else {
      this.groupFlag = false;
    }
  }

  getStoreTypes() {
    this._strService.getStoreTypes().subscribe((ok) => {
      console.log("store types >>", ok);
      this.strTypeList = ok;
      if (this.storeTypeName) {
        this.model.storeTypeEntity.id = this.strTypeList.find(
          (x) => x.storeTypeName === this.storeTypeName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  AddStrType(action) {
    if (this.stroeFlag) {
      const modalRef = this.modalService.open(AddstoretypeComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { storeTypeName: this.storeTypeName }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getStoreTypes();
          this.stroeFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  OnStrTypeChange(event) {
    console.log(event);
    this.storeTypeName = event.term;
    this.stroeFlag = event.items.length == 0 ? true : false;
  }
  goBack() {
    this._location.back();
  }
  AddPack(action) {
    if (this.packageFlag) {
      const modalRef = this.modalService.open(CreatepackingComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { packName: this.packName }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getPackings();
          this.packageFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddDiscountSlab(action) {
    if (this.discountFlag) {
      const modalRef = this.modalService.open(AdddiscountslabComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        discountSlabName: this.discountSlabName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getDiscountSlabs();
          this.discountFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  Addhsn(action) {
    if (this.hsnFlag) {
      const modalRef = this.modalService.open(AddhsnsacComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        hsnName: this.hsnName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getHsns();
          this.hsnFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddManf(action) {
    if (this.addMFG) {
      const modalRef = this.modalService.open(AddmanufacturerComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        manufacturerName: this.manufacturerName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getManufacture();
          this.addMFG = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddSch(action) {
    if (this.schedulFlag) {
      const modalRef = this.modalService.open(AddscheduleComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        schedulerName: this.schedulerName,
      };

      modalRef.result
        .then((result) => {
          this.getSchedules();
          this.schedulFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddComp(action) {
    if (this.compFlag) {
      const modalRef = this.modalService.open(AddcompositionComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        cName: this.cName,
      };

      modalRef.result
        .then((result) => {
          this.cName = result;
          this.getComposition();
          this.compFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  OnPackChange(event) {
    console.log(event);
    this.packName = event.term;
    this.packageFlag = event.items.length == 0 ? true : false;
  }

  OnDiscChange(event) {
    console.log(event);
    this.discountSlabName = event.term;
    this.discountFlag = event.items.length == 0 ? true : false;
  }

  OnHsnChange(event) {
    console.log(event);
    this.hsnName = event.term;
    this.hsnFlag = event.items.length == 0 ? true : false;
  }

  OnManfChange(event) {
    console.log(event);
    this.manufacturerName = event.term;
    if (event.items.length == 0) {
      this.addMFG = true;
    } else {
      this.addMFG = false;
    }
  }

  OnSchChange(event) {
    console.log(event);
    this.schedulerName = event.term;
    this.schedulFlag = event.items.length == 0 ? true : false;
  }

  OnCmpChange(event) {
    console.log(event);
    this.cName = event.term;
    this.compFlag = event.items.length == 0 ? true : false;
  }

  getPackings() {
    console.log(this.packName);
    this._packService.getPacks().subscribe((ok) => {
      console.log(ok);
      this.packList = ok;
      if (this.packName) {
        this.model.packName = this.packList.find(
          (x) => x.packName === this.packName
        ).packName;
        console.log(this.selectedPack);
        this.qtyChange(this.model.packName);
        document.getElementById("frmcard").click();
      }
    });
  }
  getManufacture() {
    this._manfService.getManufactures().subscribe((ok) => {
      this.manfList = ok;
      if (this.manufacturerName) {
        this.model.manufactureEntity.id = this.manfList.find(
          (x) => x.manufacturerName === this.manufacturerName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getSchedules() {
    this._scheduleService.getSchedulers().subscribe((ok) => {
      console.log(ok);
      this.schList = ok;
      if (this.schedulerName) {
        this.model.scheduleEntity.id = this.schList.find(
          (x) => x.schedulerName === this.schedulerName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getComposition() {
    this._compositionService.getCompositions().subscribe((ok) => {
      this.compList = ok;
      if (this.cName) {
        this.model.compositionEntity.id = this.compList.find(
          (x) => x.cName === this.cName
        ).id;
        document.getElementById("frmcard").click();
      }
    });
  }

  getDiscountSlabs() {
    this._discountService.getDisconts().subscribe((ok) => {
      this.discountList = ok;
      if (this.discountSlabName) {
        this.model.discSalbEntity.id = this.discountList.find(
          (x) => x.discountSlabName === this.discountSlabName
        ).id;
      }
      document.getElementById("frmcard").click();
    });
  }

  getHsns() {
    this._hsnService.getHSNs().subscribe((ok) => {
      this.hsnList = ok;
      if (this.hsnName) {
        this.model.hsnsac.id = this.hsnList.find(
          (x) => x.hsnName === this.hsnName
        ).id;
      }
      document.getElementById("frmcard").click();
    });
  }
  qtyChange(action) {
    if (action) {
      this.packList.filter((t) => {
        if (t.packName == action) {
          this.model.qty_per_pack = t.qty;
        }
      });
    }
  }
  createItem(form: NgForm) {
    this.model["status"] = "A";
    this.itemService.createItem(this.model).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "Item Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Item");
        }
      },
      (err) => {
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  updateItem(form: NgForm) {
    this.model["status"] = "A";
    this.itemService
      .updateItemDetailsById(this.CustomeId, this.model)
      .subscribe(
        (ok) => {
          if (ok == "OK") {
            this.toastr.success("Success", "Item Updated");
            this._location.back();
          } else {
            this.toastr.error("Failed", "Failed to update Item");
          }
        },
        (err) => {
          console.log(err);
          this.toastr.error("Failed", err.error.message);
        }
      );
  }
  limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf(".") == -1) {
      return;
    }
    if (e.target.value.length - e.target.value.indexOf(".") > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
}
