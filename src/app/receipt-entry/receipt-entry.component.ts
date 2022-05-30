import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { ReceiptService } from "../services/receiptService/receipt.service";
import { NgxSpinnerService } from "ngx-spinner";
import { CommonService } from "app/services/commonService/common.service";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
export class RecepitEntry {
  public entryDate: Date;
  public referenceNumber: number;
  public refernceDate: Date;
  public amountType: string;
  public amount: string;
  public totalAmount: string;
  public remarks: string;
}
@Component({
  selector: "app-receipt-entry",
  templateUrl: "./receipt-entry.component.html",
  styleUrls: [
    "./receipt-entry.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ReceiptEntryComponent implements OnInit {
  showFields: any;
  public templateConf: ITemplateConfig = this.setConfigValue();
  public config: any = {};
  isOpen: boolean = true;
  CustomeId: any;
  size: any;
  updatedRes: any;
  refernceDate: any;
  entryDate: any;
  constructor(private actRoute: ActivatedRoute,
    public receiptService: ReceiptService,
    private spinner: NgxSpinnerService,
    public _commonService: CommonService,
    private _location: Location,
    private toastr: ToastrService,
  ) {
    this.config = this.templateConf;
    this.isOpen = !this.config.layout.customizer.hidden;
    this.CustomeId = this.actRoute.snapshot.params.id;
    console.log(this.CustomeId);
    if (this.CustomeId) {
      this.getReceiptId();
    }

    if (this.config.layout.sidebar.size) {
      this.size = this.config.layout.sidebar.size;
    }
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
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  // row data
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

  public Items: any[] = [
    {
      selectAmount: "",
      entryAmount: "",
      discAmount: "",
      netAmount: "",
    },
  ];
  columns2 = [
    { name: "selectAmount", prop: "amount" },
    { name: "entryAmount", prop: "entryAmount" },
    { name: "discAmount", prop: "discAmount" },
    { name: "netAmount", prop: "netAmount" },
  ];
  model = new RecepitEntry();
  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    if (!this.CustomeId) {
      this.spinner.hide();
    }
  }

  addItem() {
    this.Items.push({
      amount: "",
      entryAmount: "",
      discAmount: "",
      netAmount: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  goBack() {
    this._location.back();
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }
  getReceiptId() {
    this.receiptService.getReceiptId(this.CustomeId).subscribe((ok: any) => {
      this.updatedRes = ok;
      this.model = this.updatedRes;
      this.entryDate = this._commonService.dateformat(this.updatedRes.entryDate);
      this.refernceDate = this._commonService.dateformat(this.updatedRes.refernceDate);
      this.Items = this.updatedRes.receiptDetailsEntity;
      setTimeout(() => {
        this.spinner.hide();
      }, 2000);
    });
  }

  onSubmit(form) {
    this.model.entryDate = this.entryDate;
    this.model.refernceDate = this.refernceDate;
    let req = this.model;
    req['receiptDetailsEntity'] = this.Items;
    console.log(req);
    this.receiptService.createReceipt(req).subscribe((ok) => {
      if (ok) {
        this.toastr.success("Success", "SuccessFully Created");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to create Entry");
      }
    });
  }
  onUpdate() {
    this.model.entryDate = this.entryDate;
    this.model.refernceDate = this.refernceDate;
    let req = this.model;
    req['receiptDetailsEntity'] = this.Items;
    console.log(req);
    this.receiptService.updateReceipt(req).subscribe((ok) => {
      if (ok) {
        this.toastr.success("Success", "SuccessFully Updated");
        this._location.back();
      } else {
        this.toastr.error("Failed", "Failed to update Entry");
      }
    });
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
