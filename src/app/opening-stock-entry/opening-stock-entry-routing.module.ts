import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OpeningStockEntryTableComponent } from "./opening-stock-entry-table/opening-stock-entry-table.component";

import { OpeningStockEntryComponent } from "./opening-stock-entry.component";

const routes: Routes = [
  { path: "", component: OpeningStockEntryTableComponent },
  {
    path: "opening-stock-entry-details",
    component: OpeningStockEntryComponent,
  },
  {
    path: "opening-stock-entry-details/:id",
    component: OpeningStockEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpeningStockEntryRoutingModule {}
