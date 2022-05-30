import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CounterSaleTableComponent } from "./counter-sale-table/counter-sale-table.component";

import { CounterSaleComponent } from "./counter-sale.component";

const routes: Routes = [
  { path: "", component: CounterSaleTableComponent },
  { path: "counter-sale-details", component: CounterSaleComponent },
  { path: "counter-sale-details/:id", component: CounterSaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterSaleRoutingModule {}
