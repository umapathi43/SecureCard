import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from "@angular/common";
import { ColumnMode, DatatableComponent, SelectionType } from "@swimlane/ngx-datatable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { SupplierService } from 'app/services/supplier.service';

export class supplierPaymentRegister {
  public itemName: any;
  public group: string;
  public categoryNo: string;
  public mfg: string;
  public supplierNo: string;
  public startDate: any;
  public endDate: any;
}

@Component({
  selector: 'app-supplier-payment-register',
  templateUrl: './supplier-payment-register.component.html',
  styleUrls: ['./supplier-payment-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplierPaymentRegisterComponent implements OnInit {
  model = new supplierPaymentRegister();
  CustomeId: any;
  itemArray: any[];
  supplierArray: any[];
  itemArrayValue = [{'value':'Yes'},{'value':'NO'}]
  selectedIndex: any;
  tempData: any[];

  public chkBoxSelected = [];
  public SelectionType = SelectionType;
  @Output() directionEvent = new EventEmitter<Object>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
  itemlist: any = [];
  chkBoxSelectedReturn: any[];
  selectedItems: any = [];
  selectedSupplierName: any = [];
  selectedGroupName: any = [];
  chkBoxSelectedSupplier: any = [];
  constructor(public location: Location,
    private modalService: NgbModal,

    public _supplierService:SupplierService,
    private spinner: NgxSpinnerService,
  ) { }

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
  columns = [
    { name: "checkbox", prop: "checkbox" },
    { name: "itemName", prop: "itemName" },
    { name: "qty", prop: "qty" },
    { name: "schemeQty", prop: "schemeQty" },
    { name: "purchaseRate", prop: "purchaseRate" },
    { name: "discount", prop: "discount" },
    { name: "billDate", prop: "billDate" },
    { name: "supplierName", prop: "supplierName" },
  ];
  public columns2 = [
    { name: "SupplierName", prop: "supplierName" },
    { name: "Mobile", prop: "mobileNo" },
    { name: "GSTNo", prop: "gstNo" },
    { name: "CreditLimit", prop: "creditLimit" },
    { name: "OpeningBalance", prop: "openingBal" },
    { name: "Actions", prop: "Actions" },
  ];
  @ViewChild('input') inputEl;
  ngOnInit(): void {
    this.getSuppliers();
  }
  filterUpdateItem(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.itemName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.itemArray = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  onSubmit(form) {
    console.log(form.value);
  }
  onUpdate(data) {

  }
  goBack() {
    this.location.back();
  }

  getSuppliers() {
    this._supplierService.getSuppliers().subscribe((ok) => {
      this.supplierArray = ok;
      this.supplierArray = this.supplierArray.filter(t => { return !t.status || t.status === "A"});
      this.tempData = this.supplierArray;
    });
  }

  open(content) {
      this.spinner.show(undefined, {
        type: "ball-triangle-path",
        size: "medium",
      });
      setTimeout(() => {
        this.spinner.hide();
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      }, 100);

  }

  onItemSelect() {
    // this.chkBoxSelected.forEach(e => {
    //   this.itemlist.push(e.id);
    // });
    // let val = [];
    // this.chkBoxSelected && this.chkBoxSelected.forEach(e => {
    //   this.selectedItems.push(e);
    // });
    this.modalService.dismissAll();
  }
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }
  customChkboxOnSelectsupplier({ selected }) {
    this.chkBoxSelectedSupplier.splice(0, this.chkBoxSelectedSupplier.length);
    this.chkBoxSelectedSupplier.push(...selected);
    this.selectedSupplierName = this.chkBoxSelectedSupplier;
  }
  isSelected(action?) {
    return true;
  }
  onCheckboxChangeFn(action?) {

  }

  validateItemName(content, action){
    if(action == 'Yes'){
      this.open(content);
    }
  }
  close(item, action) {
    if (action == 'supplier') {
      this.selectedSupplierName.splice(this.selectedGroupName.indexOf(item), 1);
    }
  }
}
