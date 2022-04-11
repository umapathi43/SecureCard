import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddsupplierComponent } from "./addsupplier/addsupplier.component";
import { BulkSupplierCreateComponent } from "./bulk-supplier-create/bulk-supplier-create.component";

import { SupplierComponent } from "./supplier.component";

const routes: Routes = [
  { path: "", component: SupplierComponent },
  { path: "addsupplier", component: AddsupplierComponent },
  {
    path: "edit-supplier/:id",
    component: AddsupplierComponent,
  },
  {
    path: "bulk-create",
    component: BulkSupplierCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
