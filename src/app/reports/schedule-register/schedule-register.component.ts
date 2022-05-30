import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from "@angular/common";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ItemService } from 'app/services/item.service';
import { ColumnMode, DatatableComponent, SelectionType } from "@swimlane/ngx-datatable";
import { NgxSpinnerService } from 'ngx-spinner';
import { CompositionService } from "app/services/composition.service";
import { SchedulerService } from 'app/services/scheduler.service';


export class scheduleRegister {
  public itemName: any;
  public group: string;
  public categoryNo: string;
  public mfg: string;
  public supplierNo: string;
  public startDate: any;
  public endDate: any;
  public schedule: any;
  public composition: any;
}

@Component({
  selector: 'app-schedule-register',
  templateUrl: './schedule-register.component.html',
  styleUrls: ['./schedule-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleRegisterComponent implements OnInit {
  model = new scheduleRegister();
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
  compositionArray: any = [];
  chkBoxSelectedSchedule: any = [];
  chkBoxSelectedComposition: any = [];
  selectedScheduleName: any = [];
  manfArray: any;
  chkBoxSelectedMFG: any = [];
  selectedMFGName: any = [];
  chkBoxSelectedCategory: any =[];
  selectedCompositionName: any=[];
  constructor(public location: Location,
    private modalService: NgbModal,
    public itenService: ItemService,
    private spinner: NgxSpinnerService,
    private _compositionService: CompositionService,
    private _schedulerService: SchedulerService
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

  public columns1 = [
    { name: "checkbox", prop: "checkbox" },
    { name: "ID", prop: "id" },
    { name: "Name", prop: "compName" },
  ];
  public columns2 = [
    { name: "ID", prop: "id" },
    { name: "Name", prop: "schedulerName" },
    { name: "Warning Message", prop: "waringMsg" },
    { name: "Waring", prop: "warning" },
  ];
  @ViewChild('input') inputEl;
  ngOnInit(): void {
    this.getItemDetails();
    this.getSchedule();
    this.getComposition();
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

  getSchedule() {
    this._schedulerService.getSchedulers().subscribe((ok) => {
      this.supplierArray = ok;
      this.supplierArray = this.supplierArray.filter(t => { return !t.status || t.status === "A"});
      this.tempData = this.supplierArray;
    });
  }
  getComposition() {
    this._compositionService.getCompositions().subscribe((ok) => {
      this.compositionArray = ok;
      this.compositionArray = this.compositionArray.filter(t => { return !t.status || t.status === "A"});
      this.tempData = this.compositionArray;
      
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
  customChkboxOnSelectschedule({ selected }) {
    this.chkBoxSelectedSchedule.splice(0, this.chkBoxSelectedSchedule.length);
    this.chkBoxSelectedSchedule.push(...selected);
    this.selectedScheduleName = this.chkBoxSelectedSchedule;
  }
  customChkboxOnSelectComposition({ selected }) {
    this.chkBoxSelectedComposition.splice(0, this.chkBoxSelectedComposition.length);
    this.chkBoxSelectedComposition.push(...selected);
    this.selectedCompositionName = this.chkBoxSelectedComposition;
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
    } else  if (action == 'schedule') {
      this.selectedScheduleName.splice(this.selectedGroupName.indexOf(item), 1);
    }else if (action == 'compsition') {
      this.selectedCompositionName.splice(this.selectedGroupName.indexOf(item), 1);
    }else
    this.inputEl.nativeElement.focus();
  }
}