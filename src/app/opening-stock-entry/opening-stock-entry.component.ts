import { ActivatedRoute } from "@angular/router";
import { PurchaseEntryService } from "./../services/entryServices/purchase-entry.service";
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { ItemService } from "app/services/item.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { CommonService } from "app/services/commonService/common.service";

export class OrderGeneration {
  public orderDate: any;
  public srt: number;
}
@Component({
  selector: "app-opening-stock-entry",
  templateUrl: "./opening-stock-entry.component.html",
  styleUrls: [
    "./opening-stock-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
})
export class OpeningStockEntryComponent implements OnInit {
  public templateConf: ITemplateConfig = this.setConfigValue();
  showFields: any;
  orginDate: NgbDateStruct;
  itemArray: any = [];
  salesVal: any;
  mrpAmount: any;
  purchaseVal: any;
  totalItems: any = 1;
  readonly DELIMITER = "-";
  CustomeId: any;
  isNavbarSeachTextEmpty: boolean;
  updatedRes: any;
  config: any;
  isOpen: boolean;
  popUpselect: boolean;
  expiryDateFlag: boolean;
  constructor(
    public itenService: ItemService,
    private _purchaseService: PurchaseEntryService,
    private toastr: ToastrService,
    private _location: Location,
    private actRoute: ActivatedRoute,
    private renderer: Renderer2,
    private _commonService: CommonService,
  ) {
    this.config = this.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getStockByID();
    }
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
  // row data
  rows: any[] = [
    {
      itemName: "dean3004",
      qty: "2",
      schemeQty: "2",
      purchaseRate: "2",
      discount: "2",
      billDate: "2020-12-12",
      supplierName: "dean3004",
    },
  ];
  ColumnMode = ColumnMode;
  //limitRef = 10;
  exportColumns: any;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }
  // column header
  columns = [
    { name: "itemName", prop: "itemName" },
    { name: "qty", prop: "qty" },
    { name: "scheme Qty", prop: "scheme Qty" },
    { name: "purchase Rate", prop: "purchase Rate" },
    { name: "discount", prop: "discount" },
    { name: "bill Date", prop: "bill Date" },
    { name: "supplier Name", prop: "supplier Name" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      expiry: "",
      Mrp: "",
      Qty: "",
      PurchaseRate: "",
      srt: "",
      amount: "",
      Qpk: "",
      enterexpiryDate: "",
      expiryDate: "",
      id: 0,
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "expiry", prop: "expiry" },
    { name: "Mrp", prop: "Mrp" },
    { name: "Qty", prop: "Qty" },
    { name: "PurchaseRate", prop: "PurchaseRate" },
    { name: "srt", prop: "srt" },
    { name: "amount", prop: "amount" },
    { name: "Qpk", prop: "Qpk" },
  ];
  model = new OrderGeneration();
  ngOnInit(): void {
    this.getItemDetails();
  }

  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }
  onWrapperClick() {
    this.isNavbarSeachTextEmpty = true;
  }
  setConfigValue() {
    return (this.templateConf = {
      layout: {
        variant: "Light",
        menuPosition: "Side",
        customizer: {
          hidden: true,
        },
        navbar: {
          type: "Static",
        },
        sidebar: {
          collapsed: false,
          size: "sidebar-md",
          backgroundColor: "man-of-steel",
          backgroundImage: true,
          backgroundImageURL: "assets/img/sidebar-bg/01.jpg",
        },
      },
    });
  }
  toggleCustomizer() {
    if (this.isOpen) {
      this.renderer.removeClass(this.customizer.nativeElement, "open");
      this.isOpen = false;
    } else {
      this.renderer.addClass(this.customizer.nativeElement, "open");
      this.isOpen = true;
    }
  }

  closeCustomizer() {
    this.renderer.removeClass(this.customizer.nativeElement, "open");
    this.isOpen = this.popUpselect = false;
  }
  addItem() {
    this.Items.push({
      itemName: "",
      enterexpiry: "",
      entermrp: "",
      enterqty: "",
      enterpurchaserate: "",
      srt: "",
      amount: "",
      Qpk: "",
      expiryDate: "",
      id: 0,
    });
    this.Items = [...this.Items];
    this.totalItems = this.Items.length;
  }
  forTotalMRP() {
    this.mrpAmount = 0;
    this.Items.forEach((e) => {
      if (e.entermrp) {
        this.mrpAmount = this.mrpAmount + +e.entermrp;
      }
    });
  }
  purchaseCount() {
    this.purchaseVal = 0;
    this.Items.forEach((e) => {
      if (e.enterpurchaserate) {
        this.purchaseVal = this.purchaseVal + +e.enterpurchaserate;
      }
    });
  }
  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.totalItems = this.Items.length;
  }
  getStockByID() {
    this._purchaseService
      .getOpenStockEntryById(this.CustomeId)
      .subscribe((ok: any) => {
        this.updatedRes = ok;
        this.model = this.updatedRes;
        this.Items = this.updatedRes.openStockDetails;
        this.Items.forEach((t) => {
          if (t.itemName) {
            t.itemName = +t.itemName;
          }
        });
        document.getElementById("tooltip-validation").click();
        document.getElementById("ngx-datatable-filter").click();
        document.getElementById("basic-form-layouts").click();
      });
  }
  onSubmit() {
    var req = {};
    this.model.orderDate = this.orginDate;
    req = this.model;
    req["openStockDetails"] = this.Items;
    // req["salesVal"] = this.salesVal;
    req["salesVal"] = 0;
    req["mrpAmount"] = this.mrpAmount;
    req["purchaseVal"] = this.purchaseVal;
    req["totalItems"] = this.totalItems;
    this.Items.forEach((t) => {
      if (t.expiryDate) {
        t.enterexpiryDate = this._commonService.yearValue(t.expiryDate);
        // t.enterexpiryDate = this._purchaseService.toModel(t.expiryDate);
        delete t.expiryDate;
        delete t.id;
      }
    });
    this._purchaseService.addOpenStockEntry(req).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Stock Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  updateStock() {
    var req = {};
    this.model.orderDate = this.orginDate;
    req = this.model;
    req["openStockDetails"] = this.Items;
    // req["salesVal"] = this.salesVal;
    req["salesVal"] = 0;
    req["mrpAmount"] = this.mrpAmount;
    req["purchaseVal"] = this.purchaseVal;
    req["totalItems"] = this.totalItems;
    this.Items.forEach((t) => {
      if (t.expiryDate) {
        t.enterexpiryDate = this._commonService.yearValue(t.expiryDate);
        delete t.expiryDate;
      }
    });
    this._purchaseService.updateOpenStockEntry(req).subscribe(
      (ok: any) => {
        if (ok == "OK") {
          this.toastr.success("Success", "SuccessFully Stock Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Schedule");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  goBack() {
    this._location.back();
  }
  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  onExpiryFormate(event) {
    if (event.target.value) {
      if ((+event.target.value) > 12 ? true : false) {
        this.expiryDateFlag = true;
      } else {
        this.expiryDateFlag = false;
        return this._commonService.expiryFormat(event);
      }
    }
  }
  datevalidation(event) {
    if (event.target.value) {
      let val = event.target.value.split('/');
      if (!val[1]) {
        this.expiryDateFlag = true;
      } else {
        this.expiryDateFlag = false;
      }
    }
  }
}
export interface ITemplateConfig {
  layout: {
    variant: string; // options: Dark, Light & Transparent
    menuPosition: string; // options: Side, Top (Note: Use 'Side' for Vertical Menu & 'Top' for Horizontal Menu )
    customizer: {
      hidden: boolean; // options: true, false
    };
    navbar: {
      type: string; // options: Static & Fixed
    };
    sidebar: {
      //Options for Vertical Side menu
      collapsed: boolean; // options: true, false
      size: string; // Options: 'sidebar-lg', 'sidebar-md', 'sidebar-sm'
      backgroundColor: string; // Options: 'black', 'pomegranate', 'king-yna', 'ibiza-sunset', 'flickr', 'purple-bliss', 'man-of-steel', 'purple-love'

      /* If you want transparent layout add any of the following mentioned classes to backgroundColor of sidebar option :
              bg-glass-1, bg-glass-2, bg-glass-3, bg-glass-4, bg-hibiscus, bg-purple-pizzaz, bg-blue-lagoon, bg-electric-viloet, bg-protage, bg-tundora
            */
      backgroundImage: boolean; // Options: true, false | Set true to show background image
      backgroundImageURL: string;
    };
  };
}
