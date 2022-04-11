import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddsalesmanComponent } from "./addsalesman/addsalesman.component";
import { BulkCreateSalesmanComponent } from "./bulk-create-salesman/bulk-create-salesman.component";

import { SalesmanComponent } from "./salesman.component";

const routes: Routes = [
  { path: "", component: SalesmanComponent },
  {
    path: "addsalesman",
    component: AddsalesmanComponent,
  },
  {
    path: "edit-salesman/:id",
    component: AddsalesmanComponent,
  },
  {
    path: "bulk-create",
    component: BulkCreateSalesmanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesmanRoutingModule {}
