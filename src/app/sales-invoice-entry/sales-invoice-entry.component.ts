import { PurchaseEntryService } from "./../services/entryServices/purchase-entry.service";
import { AddsupplierComponent } from "./../supplier/addsupplier/addsupplier.component";
import { ItemService } from "./../services/item.service";
import { UserService } from "app/services/user.service";
import { SupplierService } from "./../services/supplier.service";
import { Location } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import {
  NgbCalendar,
  NgbDatepickerConfig,
  NgbDateStruct,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "app/services/commonService/common.service";

export class SalesInvoiceEntry {
  public mobileNo: string;
  public customerAddress: string;
  public customerName: number;
  public doctor: string;
  public doctorAddress: string;
  public billDate: any;
  public discount: number;
  public discountAmount: number;
  public remainderDays: any;
  public remainderDate: any;
  public homeDelivery: any;
  public tax: string;
  public sellNo: any;
  public sellMargin: string;
  public radeemToEntry: string;
  public radeemFromEntry: string;
  public poinmodepaymenttsRed: string;
  public modePayment: string;
  public invoiceDate: string;
  public entrydate: string;
  public discAmt: number;
  public dueday: string;
  public srtMargin: string;
  public duedate: string;
  public netAmt: number;
  public grossAmount: number;
  public discAmount: number;
  public noItems: number;
  public gstAmt: number;
  public roundAmount: number;
  public roundOffAmt: string;
  public otherExpenses: string;
  public expenses: string;
}

@Component({
  selector: "app-sales-invoice-entry",
  templateUrl: "./sales-invoice-entry.component.html",
  styleUrls: [
    "./sales-invoice-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesInvoiceEntryComponent implements OnInit {
  public templateConf: ITemplateConfig = this.setConfigValue();
  duedateCurrent: any;
  billDate: any;
  showFields: any;
  duedateInvoice: any;
  inVoiceDate: any;
  footerdate: any;
  entrydateInvoice: any;
  readonly DELIMITER = "-";
  supplierdata: any;
  supplierName: any;
  gstTypeList: any;
  itemArray: any;
  maxdate: { year: number; month: number; day: number };
  mfgDate: boolean;
  beforeDetails: any[];
  supFlag: boolean;
  supplierNameId: any;
  itemFilter: any[];
  isBgImageDisplay: boolean = true;
  isOpen = true;
  public config: any = {};
  size: any;
  itemSelect: any[];
  itemName: any;
  itemNameSelect: any = "Net Amount";
  itemNameSelect1: any;
  popUpselect: boolean = false;
  isNavbarSeachTextEmpty: boolean;
  remainderDta: boolean = false;
  remainderNum: boolean;
  minDate: any;
  customerNameArray: any[];
  CustomeId: any;
  entryRes: any;
  expiryDateFlag: boolean;
  constructor(
    private _location: Location,
    private configu: NgbDatepickerConfig,
    private spinner: NgxSpinnerService,
    private _supplierService: SupplierService,
    private _userService: UserService,
    private calendar: NgbCalendar,
    public itenService: ItemService,
    private modalService: NgbModal,
    private el: ElementRef,
    private _purchaseService: PurchaseEntryService,
    private renderer: Renderer2,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    private _commonService: CommonService,
  ) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
    this.config = this.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {
      this.getSalesInvoiceEntryById();
    }
  }
  @Output() directionEvent = new EventEmitter<Object>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
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
  // row data
  rows: any[] = [
    {
      itemName: "dean3004",
      qty: "2",
      netRate: "2",
      discount: "2",
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
    { name: "schemeQty", prop: "schemeQty" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];

  public Items: any[] = [
    {
      name: 0,
      batch: "",
      expiryDate: "",
      qtyStrip: "",
      mrp: "",
      discount: "",
      marginper: 0,
      gst: "",
      marginAmount: "",
      taxAmount: "",
      salesRate: "",
      grossAmt: "",
      id: 0,
      netAmt: "",
    },
  ];
  columns2 = [
    { name: "name", prop: "name" },
    { name: "batch", prop: "batch" },
    { name: "expiryDate", prop: "expiryDate" },
    { name: "Qty Strip", prop: "qtyStrip" },

    { name: "mrp", prop: "mrp" },
    { name: "discount", prop: "discount" },

    { name: "taxAmount", prop: "taxAmount" },

    { name: "grossAmt", prop: "grossAmt" },
    { name: "netAmt", prop: "netAmt" },
    { name: "marginAmount", prop: "marginAmount" },
    { name: "marginper", prop: "marginper" },
  ];
  model = new SalesInvoiceEntry();
  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.getGstTpes();
    this.getItemDetails();
    this.getSettingsDetails();
    this.getUsers();
    this.itemFilter = this.Items;
    this.itemSelect = [
      // { itemName: "Item Name", id: 1 },
      // { itemName: "Batch", id: 2 },
      // { itemName: "Expiry Date", id: 3 },
      // { itemName: "MFG Date", id: 4 },
      { itemName: "Best Before", id: 5 },
      { itemName: "Quantty", id: 6 },
      { itemName: "free Qty", id: 7 },
      { itemName: "MRP", id: 8 },
      { itemName: "Purchase Rate", id: 9 },
      { itemName: "Discount", id: 10 },
      { itemName: "Discount Amount", id: 11 },
      { itemName: "Schedule Discount Amount", id: 12 },
      { itemName: "Tax Amount", id: 13 },
      { itemName: "Quantity Per Pack", id: 14 },
      { itemName: "SRT", id: 15 },
      { itemName: "Gross Amount", id: 16 },
      { itemName: "Net Amount", id: 17 },
      { itemName: "GST", id: 18 },
    ];
    if (!this.CustomeId) {
      this.spinner.hide();
    }
  }
  onSubmit(form) {
    console.log(form.value);
  }

  OnpriorityChange(event) {
    this.itemName = event.term;
  }
  remainderDate(action, data) {
    var current = {
      day: 0,
      month: 0,
      year: 0,
    };
    if (data == "num") {
      var date = new Date();
      let act = action;
      date.setDate(date.getDate() + act);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      this.duedateCurrent = this.calendar.getToday();
      current.day = day;
      current.month = month;
      current.year = year;
      this.remainderDta = true;
      this.duedateCurrent = current;
    } else {
      this.remainderNum = true;
      var sent = new Date(action);
      var currt = new Date();
      var nub = Math.floor(
        (Date.UTC(sent.getFullYear(), sent.getMonth(), sent.getDate()) -
          Date.UTC(currt.getFullYear(), currt.getMonth(), currt.getDate())) /
        (1000 * 60 * 60 * 24)
      );
      this.model.remainderDays = nub;  // .toString();
    }
  }
  addItem() {
    this.Items.push({
      name: 0,
      batch: "",
      expiryDate: "",
      qtyStrip: "",
      mrp: "",
      discount: "",
      marginper: 0,
      marginAmount: "",
      taxAmount: "",
      gast: "",
      salesRate: "",
      grossAmt: "",
      netAmt: "",
      id: 0,
    });
    this.Items = [...this.Items];
    this.itemFilter = this.Items;
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
    this.itemFilter = this.Items;
    // this.totalGross();
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }

  getGstTpes() {
    this._userService.getGstTypes().subscribe((ok) => {
      console.log("GST TYPES >>", ok);
      this.gstTypeList = ok;
    });
  }
  toModel(date: NgbDateStruct | null): string | null {
    return date
      ? date.year + this.DELIMITER + date.month + this.DELIMITER + date.day
      : null;
  }
  duedateChange(action) {
    var current = {
      day: 0,
      month: 0,
      year: 0,
    };
    var date = new Date();
    let act = +action;
    date.setDate(date.getDate() + act);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    this.duedateCurrent = this.calendar.getToday();
    current.day = day;
    current.month = month;
    current.year = year;
    this.duedateInvoice = current;
  }
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }

  onWrapperClick() {
    this.isNavbarSeachTextEmpty = true;
  }

  getUsers() {
    this._userService.getUsers().subscribe((ok) => {
      this.customerNameArray = ok;
    });
  }
  filterUpdate(event) {
    const val = event.target.value.toLowerCase()
      ? event.target.value.toLowerCase()
      : "";

    // filter our data
    const temp = this.Items.filter((d) => {
      return d.itemName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    if (temp.length > 0 && val != "") {
      this.Items = temp;
    } else {
      this.Items = this.itemFilter;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  defaultChange(action) {
    if (action == this.itemNameSelect) {
      this.addItem();
    }
  }
  backtoNormal(event) {
    if (event) {
    }
    this.closeCustomizer();
  }
  getSettingsDetails() {
    this._purchaseService.getSettingsDetails().subscribe((ok: any) => {
      this.itemNameSelect = ok[0].settingName;
      this.itemNameSelect1 = this.itemNameSelect;
    });
  }
  updatteSetting() {
    var req = {
      id: 1,
      settingName: this.itemNameSelect,
    };
    this.itemNameSelect1 = this.itemNameSelect;
    this._purchaseService.updateSettingsDetails(req).subscribe((ok: any) => {
      if (ok.toLowerCase() === "ok") {
        setTimeout(() => {
          this.itemNameSelect1 = this.itemNameSelect;
        }, 10);
        this.toastr.success("Success", "Updated");
      }
    });
  }
  taxAmountChange(action, ind) {
    action.discount = action.discount ? action.discount : 0;
    action.gst = action.gst ? action.gst : 0;
    this.Items.forEach((e, i) => {
      if (i == ind) {
        const tot = +action.qtyStrip * +action.salesRate;
        const gt = tot - (tot * +action.discount) / 100;
        e.taxAmount =
          tot - (tot * +action.discount) / 100 + gt * (action.gst / 100);
      }
    });
    this.totalNetAmount(action, ind);
    this.totalGrossAmount(action, ind);
  }
  totalNetAmount(action, ind) {
    if (action.taxAmount && action.grossAmt) {
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.netAmt = action.grossAmt + action.taxAmount;
        }
      });
    }
  }
  totalGrossAmount(action, ind) {
    if (action.qtyStrip && action.salesRate) {
      this.Items.forEach((e, i) => {
        if (i == ind) {
          e.grossAmt = action.qtyStrip + action.salesRate;
        }
      });
    }
  }
  totalGrossFooter() {
    let gross = 0;
    let disAmount = 0;
    let gstAmt = 0;
    let netAmt = 0;
    if (this.Items.length > 0) {
      this.Items.forEach((e) => {
        e.discAmount = e.discAmount ? e.discAmount : 0;
        gross = gross + e.grossAmt;
        // disAmount = disAmount + e.discAmount;
        // gstAmt = gstAmt + e.taxAmount;
        netAmt = netAmt + e.netAmt;
      });
      this.model.grossAmount = gross;
      // this.model.discountAmt = disAmount;
      // this.model.gstamount = gstAmt;
      this.model.roundAmount = netAmt;
      // this.model.netAmount = netAmt;
      this.model.noItems = this.Items.length;
    }
  }
  saveSalesEntry() {
    this.model.billDate = this.billDate;
    this.model.remainderDate = this.duedateCurrent;
    this.model["status"] = "A";
    var req = this.model;
    this.Items.forEach(e => {
      delete e.id;
      if (e.expiryDate){
        e.expiryDate = this._commonService.yearValue(e.expiryDate);
      }
    });
    req["stockinvoiceDetails"] = this.Items;
    this._purchaseService.saveSalesInvoiceEntryEntry(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.toastr.success("Success", "SuccessFully Invoice Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Invoice");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  UpdateSalesEntry() {
    this.model.billDate = this.billDate;
    this.model.remainderDate = this.duedateCurrent;
    var req = this.model;
    req["stockinvoiceDetails"] = this.Items;
    req["stockinvoiceDetails"] && req["stockinvoiceDetails"].forEach(e => {
      if (e.expiryDate){
        e.expiryDate = this._commonService.yearValue(e.expiryDate);
      }
    });
    this._purchaseService.updateSalesInvoiceEntryEntry(req).subscribe(
      (ok: any) => {
        if (ok) {
          this.toastr.success("Success", "SuccessFully Invoice Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update Invoice");
        }
      },
      (err) => {
        this.toastr.error("Failed", err.error.message);
      }
    );
  }
  getSalesInvoiceEntryById() {
    this._purchaseService
      .getSalesInvoiceEntryById(this.CustomeId)
      .subscribe((ok: any) => {
        this.entryRes = ok;
        this.model = this.entryRes;
        this.billDate = this._commonService.dateformat(this.entryRes.billDate);
        this.duedateCurrent = this._commonService.dateformat(this.entryRes.remainderDate);
        this.Items = this.entryRes.stockinvoiceDetails;
        this.Items.forEach((t) => {
          if (t.name) {
            t.name = +t.name;
          }
        });
        document.getElementById("tooltip-validation").click();
        document.getElementById("ngx-datatable-filter").click();
        document.getElementById("basic-form-layouts").click();
        this.spinner.hide();
      });
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
  datevalidation(event){
    if (event.target.value) {
      let val = event.target.value.split('/');
      if(!val[1]){
        this.expiryDateFlag = true;
      }else{
        this.expiryDateFlag = false;
      }
    }
  }
  goBack() {
    this._location.back();
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
