import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddgroupComponent } from "./addgroup/addgroup.component";
import { BluckGroupComponent } from "./bluck-group/bluck-group.component";

import { GroupComponent } from "./group.component";

const routes: Routes = [
  { path: "", component: GroupComponent },
  {
    path: "creategroup",
    component: AddgroupComponent,
  },
  {
    path: "bluck-group",
    component: BluckGroupComponent,
  },
  {
    path: "edit-group/:id",
    component: AddgroupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {}
