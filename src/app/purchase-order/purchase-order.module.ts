import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchaseOrderRoutingModule } from "./purchase-order-routing.module";
import { PurchaseOrderComponent } from "./purchase-order.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PurchaseOrderTableComponent } from './purchase-order-table/purchase-order-table.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
  declarations: [PurchaseOrderComponent, PurchaseOrderTableComponent],
  imports: [
    CommonModule,
    PurchaseOrderRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgMultiSelectDropDownModule
  ],
})
export class PurchaseOrderModule {}
