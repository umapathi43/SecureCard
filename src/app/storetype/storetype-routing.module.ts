import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddstoretypeComponent } from "./addstoretype/addstoretype.component";

import { StoretypeComponent } from "./storetype.component";

const routes: Routes = [
  { path: "", component: StoretypeComponent },
  {
    path: "createstoretype",
    component: AddstoretypeComponent,
  },
  {
    path: "edit-storetype/:id",
    component: AddstoretypeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoretypeRoutingModule {}
