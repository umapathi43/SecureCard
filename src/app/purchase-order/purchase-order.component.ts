import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../services/commonService/common.service";
import { PurchaseEntryService } from "app/services/entryServices/purchase-entry.service";
import { ItemService } from "app/services/item.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { IDropdownSettings } from "ng-multiselect-dropdown";

export class PurchesOrder {
  public orderDate: string;
  public supplierName: string;
  public status: string;
  public totalCount: any;
}
@Component({
  selector: "app-purchase-order",
  templateUrl: "./purchase-order.component.html",
  styleUrls: ["./purchase-order.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PurchaseOrderComponent implements OnInit {
  showFields: any;
  purchaseOrderId: any;
  updatedRes: any;
  itemArray: any;
  selectedIndex: any;
  dropdownSettings: IDropdownSettings = {};
  tempData: any;
  constructor(
    private _location: Location,
    private spinner: NgxSpinnerService,
    private _purchaseEntryService: PurchaseEntryService,
    private toastr: ToastrService,
    private actRoute: ActivatedRoute,
    public _commonService: CommonService,
    private itenService: ItemService,
    private modalService: NgbModal
  ) {
    this.getItemDetails();
    this.purchaseOrderId = this.actRoute.snapshot.params.id;
    if (this.purchaseOrderId) {
      this.getPODetailsById();
    }
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
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
    { name: "schemeQty", prop: "schemeQty" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];

  public Items: any[] = [
    {
      itemName: "",
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
    },
  ];
  columns2 = [
    { name: "itemName", prop: "itemName" },
    { name: "orderQty", prop: "baorderQtytch" },
    { name: "minQty", prop: "minQty" },
    { name: "maxQty", prop: "maxQty" },
    { name: "stock", prop: "stock" },
    { name: "ysale", prop: "ysale" },
    { name: "wsale", prop: "wsale" },
    { name: "msale", prop: "msale" },
    { name: "pmsale", prop: "pmsale" },
  ];
  model = new PurchesOrder();
  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'itemName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  addItem() {
    this.Items.push({
      itemName: "",
      orderQty: "",
      minQty: "",
      maxQty: "",
      stock: "",
      ysale: "",
      wsale: "",
      msale: "",
      pmsale: "",
    });
    this.Items = [...this.Items];
  }

  removeItem(i: number) {
    this.Items.splice(i, 1);
  }

  DisplayFileds(index) {
    this.showFields = index;
    console.log(this.showFields);
  }

  onSubmit() {
    let req = this.model;
    req["purchaseOrderDetails"] = this.Items;
    this.spinner.show();
    this._purchaseEntryService.addPurchaseOrder(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Created");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  onUpdate() {
    console.log(this.model);
    let req = this.model;
    req["purchaseOrderDetails"] = this.Items;
    this.spinner.show();
    this._purchaseEntryService.updatePurchaseOrder(req).subscribe(
      (ok) => {
        this.spinner.hide();
        if (ok) {
          this.toastr.success("Success", "SuccessFully Entry Updated");
          this._location.back();
        } else {
          this.toastr.error("Failed", "Failed to update");
        }
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
        this.toastr.error("Failed", err.error.message);
      }
    );
  }

  getPODetailsById() {
    this.spinner.show();
    this._purchaseEntryService
      .getPurchaseorderById(this.purchaseOrderId)
      .subscribe((ok: any) => {
        this.spinner.hide();
        this.updatedRes = ok;
        this.model = this.updatedRes;
        this.model.orderDate = this._commonService.dateformat(
          this.updatedRes.orderDate
        );
        console.log(this.model);
        this.Items = this.updatedRes.purchaseOrderDetails;
        document.getElementById("tooltip-validation").click();
        document.getElementById("ngx-datatable-filter").click();
        document.getElementById("basic-form-layouts").click();
      });
  }

  goBack() {
    this._location.back();
  }

  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      console.log(ok);
      this.itemArray = ok.filter((t) => t.status == "A");
      this.tempData = this.itemArray;
    });
  }

  open(content,index) {
    this.selectedIndex = index;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size:"xl"}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(index: number): any {
    // if (reason === ModalDismissReasons.ESC) {
    //   return 'by pressing ESC';
    // } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //   return 'by clicking on a backdrop';
    // } else {
    //   return `with: ${reason}`;
    // }
  }

  onItemSelect(item: any) {
    console.log(item);
    this.Items[this.selectedIndex].itemName = item.itemName;
    this.Items[this.selectedIndex].minQty = item.min_qty;
    this.Items[this.selectedIndex].maxQty = item.max_qty;
    this.modalService.dismissAll();
  }

  get TotalQtys(){
   let total = this.Items.reduce((sum, current) => sum + current.orderQty, 0);
    return total;
}

filterUpdateItem(event) {
  const val = event.target.value.toLowerCase();
  debugger;
  // filter our data
  const temp = this.tempData.filter(function (d) {
    return d.itemName.toLowerCase().indexOf(val) !== -1 || !val;
  });

  // update the rows
  this.itemArray = temp;
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}
}
