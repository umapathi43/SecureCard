import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReceiptEntryTableComponent } from "./receipt-entry-table/receipt-entry-table.component";

import { ReceiptEntryComponent } from "./receipt-entry.component";

const routes: Routes = [
  { path: "", component: ReceiptEntryTableComponent },
  { path: "receipt-entry-details", component: ReceiptEntryComponent },
  { path: "receipt-entry-details/:id", component: ReceiptEntryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptEntryRoutingModule {}
