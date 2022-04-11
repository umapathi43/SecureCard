import { SalesInvoiceEntryTableComponent } from "./sales-invoice-entry-table/sales-invoice-entry-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SalesInvoiceEntryComponent } from "./sales-invoice-entry.component";

const routes: Routes = [
  { path: "", component: SalesInvoiceEntryTableComponent },
  { path: "sales-invoice-entry-table", component: SalesInvoiceEntryComponent },
  {
    path: "sales-invoice-entry-table/:id",
    component: SalesInvoiceEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesInvoiceEntryRoutingModule {}
