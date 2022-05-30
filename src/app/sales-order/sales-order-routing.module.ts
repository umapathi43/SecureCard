import { SalesOrderTableComponent } from "./sales-order-table/sales-order-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SalesOrderComponent } from "./sales-order.component";

const routes: Routes = [
  { path: "", component: SalesOrderTableComponent },
  { path: "sales-order-details", component: SalesOrderComponent },
  { path: "sales-order-details/:id", component: SalesOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesOrderRoutingModule {}
