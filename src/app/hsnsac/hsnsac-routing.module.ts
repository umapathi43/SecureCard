import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BluckGroupComponent } from "app/group/bluck-group/bluck-group.component";
import { AddhsnsacComponent } from "./addhsnsac/addhsnsac.component";
import { BluckHsnsacComponent } from "./bluck-hsnsac/bluck-hsnsac.component";

import { HsnsacComponent } from "./hsnsac.component";

const routes: Routes = [
  { path: "", component: HsnsacComponent },
  {
    path: "createhsnsac",
    component: AddhsnsacComponent,
  },
  {
    path: "bluck-hsnsac",
    component: BluckHsnsacComponent,
  },
  {
    path: "edit-hsnsac/:id",
    component: AddhsnsacComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HsnsacRoutingModule {}
