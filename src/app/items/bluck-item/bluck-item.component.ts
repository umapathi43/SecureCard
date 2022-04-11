import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
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
import { ItemService } from "app/services/item.service";

@Component({
  selector: 'app-bluck-item',
  templateUrl: './bluck-item.component.html',
  styleUrls: ['./bluck-item.component.scss',
    "../../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BluckItemComponent implements OnInit {
  ColumnMode = ColumnMode;
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
  compName: any;
  qytPerPack: any;
  addMFG: boolean;
  groupFlag: boolean;
  stroeFlag: boolean;
  schedulFlag: boolean;
  compFlag: boolean;
  hsnFlag: boolean;
  discountFlag: boolean;
  packageFlag: boolean;
  public Items: any[] = [
    {
      itemName: '',
      packName: null,
      qty_per_pack: '',
      manufactureEntity: {
        id: null,
      },
      groupEntity: {
        id: null,
      },
      storeTypeEntity: {
        id: null,
      },
      scheduleEntity: {
        id: null,
      },
      compositionEntity: {
        id: null,
      },
      hsnsac: {
        id: null,
      },
      min_amt: '',
      max_amt: '',
      min_qty: '',
      max_qty: '',
      rateA: '',
      rateB: '',
      rateC: '',
      rateD: '',
      discSalbEntity: {
        id: null,
      },
      gstType: '',
      status: "A",
    },
  ];
  columns2 = [
    { name: "Name", prop: "name" },
    { name: "Packing", prop: "packing" },
    { name: "Qty Per Pack", prop: "QtyPerPack" },
    { name: "MGF", prop: "mgf" },
    { name: "Group", prop: "group" },
    { name: "Store Type", prop: "storeType" },
    { name: "Schedule", prop: "schedule" },
    { name: "Composition", prop: "composition" },
    { name: "HSN", prop: "hsn" },
    { name: "Min Discount", prop: "MinDiscount" },
    { name: "Max Discount", prop: "MaxDiscount" },
    { name: "Min Quantity", prop: "MinQuantity" },
    { name: "Max quantity", prop: "Maxquantity" },
    { name: "Rate A", prop: "RateA" },
    { name: "Rate B", prop: "RateB" },
    { name: "Rate C", prop: "RateC" },
    { name: "Rate D", prop: "RateD" },
    { name: "GST", prop: "gst" },
    { name: "Discount Slab", prop: "DiscountSlab" },
  ];
  routeList: any;
  constructor(
    private _location: Location,
    private _packService: PackingService,
    private _manfService: ManufactureService,
    private _scheduleService: SchedulerService,
    private _compositionService: CompositionService,
    private _discountService: DiscountslabService,
    private _hsnService: HsnandsacService,
    private _userService: UserService,
    private _grpService: GroupService,
    private _strService: StoretypeService,
    private itemService: ItemService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
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

  addItem() {
    this.Items.push({
      itemName: '',
      packName: null,
      qty_per_pack: '',
      manufactureEntity: {
        id: null,
      },
      groupEntity: {
        id: null,
      },
      storeTypeEntity: {
        id: null,
      },
      scheduleEntity: {
        id: null,
      },
      compositionEntity: {
        id: null,
      },
      hsnsac: {
        id: null,
      },
      min_amt: '',
      max_amt: '',
      min_qty: '',
      max_qty: '',
      rateA: '',
      rateB: '',
      rateC: '',
      rateD: '',
      discSalbEntity: {
        id: null,
      },
      gstType: '',
      status: "A",

    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      this.gstTypeList = ok;
      // this.model.gst = "Unregister ";
      // this.model.gstType = "Unregister ";
      //  document.getElementById("frmcard").click();
      this.spinner.hide();
    });
  }

  getGroups(ind?) {
    this._grpService.getGroups().subscribe((ok) => {
      this.grpList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.groupEntity.id = this.grpList.find(
            (x) => x.groupName === this.groupName
          ).id;
        };
        setTimeout(() => {
          this.spinner.hide();
        }, 200);
        document.getElementById("frmcard").click();
      });
    });
  }

  AddGrp(action, ind) {
    if (this.groupFlag) {
      const modalRef = this.modalService.open(AddgroupComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { groupName: this.groupName }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getGroups(ind);
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

  getStoreTypes(ind?) {
    this._strService.getStoreTypes().subscribe((ok) => {
      console.log("store types >>", ok);
      this.strTypeList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.storeTypeEntity.id = this.strTypeList.find(
            (x) => x.storeTypeName === this.storeTypeName
          ).id;
          document.getElementById("frmcard").click();
        }
      });
    });
  }

  AddStrType(action, ind?) {
    if (this.stroeFlag) {
      const modalRef = this.modalService.open(AddstoretypeComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { storeTypeName: this.storeTypeName }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getStoreTypes(ind);
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
  AddPack(action?, ind?) {
    if (this.packageFlag) {
      this.spinner.show(undefined, {
        type: "ball-triangle-path",
        size: "medium",
      });
      const modalRef = this.modalService.open(CreatepackingComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = { packName: this.packName }; // should be the data
      modalRef.result
        .then((result) => {
          this.getPackings();
          this.packageFlag = false;
        })
        .catch((error) => {
        });
    }
  }

  AddDiscountSlab(action,ind) {
    if (this.discountFlag) {
      const modalRef = this.modalService.open(AdddiscountslabComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        discountSlabName: this.discountSlabName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          this.getDiscountSlabs(ind);
          this.discountFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  Addhsn(action, ind) {
    if (this.hsnFlag) {
      const modalRef = this.modalService.open(AddhsnsacComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        hsnName: this.hsnName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          console.log(result);
          this.getHsns(ind);
          this.hsnFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddManf(action, ind?) {
    if (this.addMFG) {
      this.spinner.show(undefined, {
        type: "ball-triangle-path",
        size: "medium",
      });
      const modalRef = this.modalService.open(AddmanufacturerComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        manufacturerName: this.manufacturerName,
      }; // should be the data
      modalRef.result
        .then((result) => {
          this.getManufacture(ind);
          this.addMFG = false;
        })
        .catch((error) => {
        });
    }
  }

  AddSch(action, ind?) {
    if (this.schedulFlag) {
      const modalRef = this.modalService.open(AddscheduleComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        schedulerName: this.schedulerName,
      };

      modalRef.result
        .then((result) => {
          this.getSchedules(ind);
          this.schedulFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  AddComp(action, ind?) {
    if (this.compFlag) {
      const modalRef = this.modalService.open(AddcompositionComponent);
      modalRef.componentInstance.id = 0; // should be the id
      modalRef.componentInstance.data = {
        compName: this.compName,
      };

      modalRef.result
        .then((result) => {
          this.compName = result;
          this.getComposition(ind);
          this.compFlag = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  OnPackChange(event) {
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
    this.compName = event.term;
    this.compFlag = event.items.length == 0 ? true : false;
  }

  getPackings() {
    this._packService.getPacks().subscribe((ok) => {
      this.packList = ok;
      if (this.packName) {
        this.Items.forEach((e, i) => {
          e.packName = this.packList.find(
            (x) => x.packName === this.packName
          ).packName;
          this.qtyChange(e.packName, i);
        });
        setTimeout(() => {
          this.spinner.hide();
        }, 200);
      }
    });
  }
  getManufacture(ind?) {
    debugger
    this._manfService.getManufactures().subscribe((ok) => {
      this.manfList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.manufactureEntity.id = this.manfList.find(
            (x) => x.manufacturerName === this.manufacturerName
          ).id;
        };
        setTimeout(() => {
          this.spinner.hide();
        }, 200);
        document.getElementById("frmcard").click();
      });
    });
  }

  getSchedules(ind?) {
    this._scheduleService.getSchedulers().subscribe((ok) => {
      this.schList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.scheduleEntity.id = this.schList.find(
            (x) => x.schedulerName === this.schedulerName
          ).id;
        }
      });
    });
  }

  getComposition(ind?) {
    this._compositionService.getCompositions().subscribe((ok) => {
      this.compList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.compositionEntity.id = this.compList.find(
            (x) => x.compName === this.compName
          ).id;
          document.getElementById("frmcard").click();
        }
      });
    });
  }

  getDiscountSlabs(ind?) {
    this._discountService.getDisconts().subscribe((ok) => {
      this.discountList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.discSalbEntity.id = this.discountList.find(
            (x) => x.discountSlabName === this.discountSlabName
          ).id;
          document.getElementById("frmcard").click();
        }
      });
    });
  }

  getHsns(ind?) {
    this._hsnService.getHSNs().subscribe((ok) => {
      this.hsnList = ok;
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.hsnsac.id = this.hsnList.find(
            (x) => x.hsnName === this.hsnName
          ).id;
          document.getElementById("frmcard").click();
        }
      });
      // if (this.hsnName) {
      //   this.model.hsnsac.id = this.hsnList.find(
      //     (x) => x.hsnName === this.hsnName
      //   ).id;
      // }
      // document.getElementById("frmcard").click();
    });
  }
  qtyChange(action, ind?) {
    if (action) {
      this.Items.forEach((e, i) => {
        if (ind == i) {
          this.packList.filter((t) => {
            if (t.packName == action) {
              e.qty_per_pack = t.qty;
            }
          });
        }
      });

    }
  }
  limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf(".") == -1) {
      return;
    }
    if (e.target.value.length - e.target.value.indexOf(".") > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
  createItem(form) {
    this.itemService.bluckCreateItem(this.Items).subscribe(
      (ok: any) => {
        if (ok) {
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
}
