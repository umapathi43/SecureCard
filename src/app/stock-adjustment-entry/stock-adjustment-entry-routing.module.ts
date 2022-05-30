import { StockAdjustmentEntryTableComponent } from "./stock-adjustment-entry-table/stock-adjustment-entry-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StockAdjustmentEntryComponent } from "./stock-adjustment-entry.component";

const routes: Routes = [
  { path: "", component: StockAdjustmentEntryTableComponent },
  {
    path: "stock-adjustment-entry-details",
    component: StockAdjustmentEntryComponent,
  },
  {
    path: "stock-adjustment-entry-details/:id",
    component: StockAdjustmentEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockAdjustmentEntryRoutingModule {}
