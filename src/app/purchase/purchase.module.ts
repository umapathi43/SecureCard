import { SupplierModule } from "./../supplier/supplier.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PurchaseRoutingModule } from "./purchase-routing.module";
import { PurchaseComponent } from "./purchase.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PurchaseTableComponent } from "./purchase-table/purchase-table.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
  declarations: [PurchaseComponent, PurchaseTableComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbModule,
    SupplierModule,
    NgMultiSelectDropDownModule
  ],
})
export class PurchaseModule {}
