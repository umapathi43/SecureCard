import { ShortageEntryTableComponent } from "./shortage-entry-table/shortage-entry-table.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ShortageEntryComponent } from "./shortage-entry.component";

const routes: Routes = [
  { path: "", component: ShortageEntryTableComponent },
  { path: "shortage-entry-details", component: ShortageEntryComponent },
  { path: "shortage-entry-details/:id", component: ShortageEntryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortageEntryRoutingModule {}
