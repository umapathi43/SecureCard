import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddbranchComponent } from "./addbranch/addbranch.component";

import { BranchComponent } from "./branch.component";

const routes: Routes = [
  { path: "", component: BranchComponent },
  {
    path: "addbranch",
    component: AddbranchComponent,
  },
  {
    path: "edit-branch/:id",
    component: AddbranchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BranchRoutingModule {}
