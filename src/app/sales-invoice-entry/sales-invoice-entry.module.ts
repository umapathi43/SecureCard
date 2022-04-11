import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesInvoiceEntryRoutingModule } from "./sales-invoice-entry-routing.module";
import { SalesInvoiceEntryComponent } from "./sales-invoice-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SalesInvoiceEntryTableComponent } from "./sales-invoice-entry-table/sales-invoice-entry-table.component";

@NgModule({
  declarations: [SalesInvoiceEntryComponent, SalesInvoiceEntryTableComponent],
  imports: [
    CommonModule,
    SalesInvoiceEntryRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class SalesInvoiceEntryModule {}
