import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdddiscountslabComponent } from "./adddiscountslab/adddiscountslab.component";
import { BulkCreateDiscountslabComponent } from "./bulk-create-discountslab/bulk-create-discountslab.component";

import { DiscountslabComponent } from "./discountslab.component";

const routes: Routes = [
  { path: "", component: DiscountslabComponent },
  {
    path: "adddiscountslab",
    component: AdddiscountslabComponent,
  },
  {
    path: "edit-discountslab/:id",
    component: AdddiscountslabComponent,
  },
  {
    path: "bulk-create",
    component: BulkCreateDiscountslabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscountslabRoutingModule {}
