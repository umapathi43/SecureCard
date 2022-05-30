import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { CommonService } from "app/services/commonService/common.service";
import { ItemService } from "app/services/item.service";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { NgForm } from "@angular/forms";
export class OrderGeneration {
  public itemName: string;
  public QtyPerPack: string;
  public batchName: string;
  public batchNo: string;
  public expiry: string;
  public mrp: string;
  public purchaseRate: string;
  public saleRate: string;
  public availableStock: string;
}
@Component({
  selector: "app-batch-details",
  templateUrl: "./batch-details.component.html",
  styleUrls: ["./batch-details.component.scss"],
})
export class BatchDetailsComponent implements OnInit {
  showFields: any;
  itemArray: any[];
  dropdownSettings: IDropdownSettings = {};
  CustomeId: any;
  expiryDate: any;
  @ViewChild('orderForm') orderForm: NgForm;
  expiryDateFlag: boolean = false;

  constructor(public itenService: ItemService,
    private modalService: NgbModal,
    public _commonService: CommonService,
    public location: Location,
    private actRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    this.CustomeId = this.actRoute.snapshot.params.id;
    if (this.CustomeId) {

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
      batchno: "",
      expiry: "",
      mrp: "",
      purchaserate: "",
      salerate: "",
      specialsalerate: "",
      availablestock: "",
      quantityperpack: "",
    },
  ];
  columns2 = [
    { name: "batchno", prop: "batchno" },
    { name: "expiry", prop: "expiry" },
    { name: "mrp", prop: "mrp" },
    { name: "purchaserate", prop: "purchaserate" },
    { name: "salerate", prop: "salerate" },
    { name: "specialsalerate", prop: "specialsalerate" },
    { name: "availablestock", prop: "availablestock" },
    { name: "quantityperpack", prop: "quantityperpack" },
  ];
  model = new OrderGeneration();
  ngOnInit(): void {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'itemName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.getItemDetails();
  }
  onSubmit(form) {
    this.model.expiry = this._commonService.yearValue(this.expiryDate);
    console.log(form.value);
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
  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
    });
  }
  qytValue(action) {
    if (this.itemArray && action) {
      this.itemArray.forEach(e => {
        if (e.id == action) {
          this.model.QtyPerPack = e.qty_per_pack ? e.qty_per_pack : '';
        }
      });
    }
  }
  onExpiryFormate(event, form: NgForm) {
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
  onItemSelect(item: any) {
    console.log(item);
    // this.Items[this.selectedIndex].name = item.itemName;
    this.modalService.dismissAll();
  }
  onUpdate(data) {

  }
  goBack() {
    this.location.back();
  }
}
