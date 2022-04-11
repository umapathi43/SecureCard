import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from "@angular/common";
import { ColumnMode, DatatableComponent, SelectionType } from "@swimlane/ngx-datatable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from 'app/services/item.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { GroupService } from 'app/services/group.service';
import { ManufactureService } from 'app/services/manufacture.service';


export class stockReport {
  public itemName: any;
  public group: string;
  public categoryNo: string;
  public mfg: string;
  public supplierNo: string;
  public startDate: any;
  public endDate: any;
}

@Component({
  selector: 'app-stock-report-item-wise',
  templateUrl: './stock-report-item-wise.component.html',
  styleUrls: ['./stock-report-item-wise.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockReportItemWiseComponent implements OnInit {
  model = new stockReport();
  CustomeId: any;
  itemArray: any[];
  itemArrayValue = [{ 'value': 'Yes' }, { 'value': 'NO' }]
  selectedIndex: any;
  tempData: any[];
  public chkBoxSelected = [];
  public chkBoxSelectedgroup = [];
  public SelectionType = SelectionType;
  @Output() directionEvent = new EventEmitter<Object>();
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild("tableRowDetails") tableRowDetails: any;
  @ViewChild("customizer") customizer: ElementRef;
  itemlist: any = [];
  chkBoxSelectedReturn: any[];
  selectedItems: any = [];
  groupArray: any = [];
  selectedGroupName: any = [];
  supplierArray: any=[];
  chkBoxSelectedSupplier: any = [];
  selectedSupplierName: any = [];
  manfArray: any;
  chkBoxSelectedMFG: any = [];
  selectedMFGName: any = [];
  chkBoxSelectedCategory: any =[];
  selectedCategory: any=[];
  constructor(public location: Location,
    private modalService: NgbModal,
    public itenService: ItemService,
    private spinner: NgxSpinnerService,
    private _grpService: GroupService,
    private _manfService: ManufactureService,
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
  columns1 = [
    { name: "checkbox", prop: "checkbox" },
    { name: "groupName", prop: "groupName" },
  ];
  public columns2 = [
    { name: "SupplierName", prop: "supplierName" },
    { name: "Mobile", prop: "mobileNo" },
    { name: "GSTNo", prop: "gstNo" },
    { name: "CreditLimit", prop: "creditLimit" },
    { name: "OpeningBalance", prop: "openingBal" },
    { name: "Actions", prop: "Actions" },
  ];
  public columns3 = [
    { name: "Manufacturer Name", prop: "manufacturerName" },
   
  ];
  @ViewChild('input') inputEl;
  ngOnInit(): void {
    this.getItemDetails();
    this.getGroups();

    this.getManufacture();
  }
  filterUpdateItem(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.supplierName.toLowerCase().indexOf(val) !== -1 || !val;
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

  getItemDetails() {
    this.itenService.getItemDetails().subscribe((ok: any) => {
      this.itemArray = ok.filter((t) => t.status == "A");
      this.tempData = this.itemArray;
    });
  }
  getGroups() {
    this._grpService.getGroups().subscribe((ok) => {
      this.groupArray = ok;
      this.groupArray = this.groupArray.filter(el => { return !el.status || el.status === "A" });
      this.tempData = this.groupArray;
    });
  }
  getManufacture() {
    this._manfService.getManufactures().subscribe((ok) => {
      this.manfArray = ok;
      this.manfArray = this.manfArray.filter(t => { return !t.status || t.status === "A"});
      this.tempData = this.manfArray;
    });
  }
  open(content) {
    // if (event.target.tagName == "INPUT" || (event.target.className == "ng-arrow-wrapper" && event.target.tagName == "SPAN")) {
    this.spinner.show(undefined, {
      type: "ball-triangle-path",
      size: "medium",
    });

    // if (this.chkBoxSelected.length > 0) {
    //   this.chkBoxSelected = [];
    //   this.chkBoxSelectedReturn.forEach(e => {
    //     let val = {
    //       selected: [e]
    //     }
    //     this.customChkboxOnSelect(val);
    //   });
    // }
    setTimeout(() => {
      this.spinner.hide();
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' })
      // .result.then((result) => {
      // }, (reason) => {
      // });
    }, 100);
    // }
    // else {
    //   if (this.selectedItems.length != item.length) {
    //     let val = [];
    //     this.selectedItems && this.selectedItems.forEach(e => {
    //       item.forEach(t => {
    //         if (e.id == t) {
    //           val.push(e)
    //         }
    //       });
    //     });
    //     this.selectedItems = val;
    //   }
    // }
  }

  onItemSelect() {
    // this.chkBoxSelected.forEach(e => {
    //   this.itemlist.push(e.id);
    // });
    // let val = [];
    // this.chkBoxSelected && this.chkBoxSelected.forEach(e => {
    //   this.selectedItems.push(e);
    // });
    // this.model.itemName = this.itemlist;
    // this.chkBoxSelectedReturn = this.chkBoxSelected;
    this.modalService.dismissAll();
  }
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
    this.selectedItems = this.chkBoxSelected;
  }
  customChkboxOnSelectGroup({ selected }) {
    this.chkBoxSelectedgroup.splice(0, this.chkBoxSelectedgroup.length);
    this.chkBoxSelectedgroup.push(...selected);
    this.selectedGroupName = this.chkBoxSelectedgroup;
  }
  customChkboxOnSelectsupplier({ selected }) {
    this.chkBoxSelectedSupplier.splice(0, this.chkBoxSelectedSupplier.length);
    this.chkBoxSelectedSupplier.push(...selected);
    this.selectedSupplierName = this.chkBoxSelectedSupplier;
  }
  customChkboxOnSelectMFG({ selected }) {
    this.chkBoxSelectedMFG.splice(0, this.chkBoxSelectedMFG.length);
    this.chkBoxSelectedMFG.push(...selected);
    this.selectedMFGName = this.chkBoxSelectedMFG;
  }
  customChkboxOnSelectCategory({ selected }) {
    this.chkBoxSelectedCategory.splice(0, this.chkBoxSelectedCategory.length);
    this.chkBoxSelectedCategory.push(...selected);
    this.selectedCategory = this.chkBoxSelectedCategory;
  }
  isSelected(action?) {
    return true;
  }
  onCheckboxChangeFn(action?) {

  }

  validateItemName(content, action) {
    if (action == 'Yes') {
      this.open(content);
    }
  }
  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term === '' ? []
  //       : this.itemArray.filter(v => v.itemName.indexOf(term) > -1).slice(0, 10))
  //   );
  // formatter = (result: any) => result.itemName;
  // selected($e) {
  //   $e.preventDefault();
  //   if (this.selectedItems.length > 0) {
  //     let flag = this.selectedItems.filter((o) => {
  //       if (o.id == $e.item.id) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     if (flag.length == 0) {
  //       this.selectedItems.push($e.item);
  //     }
  //     // this.selectedItems && this.selectedItems.forEach(e => {
  //     //   if (e.id != $e.item.id) {
  //     //     this.selectedItems.push($e.item);
  //     //   }
  //     // });
  //   } else {
  //     this.selectedItems.push($e.item);
  //   }
  //   this.inputEl.nativeElement.value = '';
  // }

  close(item, action) {
    if (action == 'item') {
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    } else if (action == 'group') {
      this.selectedGroupName.splice(this.selectedGroupName.indexOf(item), 1);
    }else if (action == 'mfg') {
      this.selectedMFGName.splice(this.selectedGroupName.indexOf(item), 1);
    }else if (action == 'Category') {
      this.selectedGroupName.splice(this.selectedGroupName.indexOf(item), 1);
    }
    this.inputEl.nativeElement.focus();
  }
}