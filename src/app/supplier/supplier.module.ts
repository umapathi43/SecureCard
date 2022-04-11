import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupplierRoutingModule } from "./supplier-routing.module";
import { SupplierComponent } from "./supplier.component";
import { AddsupplierComponent } from "./addsupplier/addsupplier.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { BulkSupplierCreateComponent } from './bulk-supplier-create/bulk-supplier-create.component';

@NgModule({
  declarations: [SupplierComponent, AddsupplierComponent, BulkSupplierCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule,
  ],
  exports: [AddsupplierComponent],
})
export class SupplierModule {}
