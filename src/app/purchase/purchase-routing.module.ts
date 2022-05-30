import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PurchaseTableComponent } from "./purchase-table/purchase-table.component";

import { PurchaseComponent } from "./purchase.component";

const routes: Routes = [
  { path: "", component: PurchaseTableComponent },
  { path: "purchase-entry-details", component: PurchaseComponent },
  { path: "purchase-entry-details/:id", component: PurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
