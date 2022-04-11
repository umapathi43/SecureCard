import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderGenerationTableComponent } from "./order-generation-table/order-generation-table.component";

import { OrderGenerationComponent } from "./order-generation.component";

const routes: Routes = [
  { path: "", component: OrderGenerationTableComponent },
  { path: "order-generation-details", component: OrderGenerationComponent },
  { path: "order-generation-details/:id", component: OrderGenerationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderGenerationRoutingModule {}
