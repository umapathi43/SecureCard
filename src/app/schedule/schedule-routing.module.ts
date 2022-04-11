import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddscheduleComponent } from "./addschedule/addschedule.component";

import { ScheduleComponent } from "./schedule.component";

const routes: Routes = [
  { path: "", component: ScheduleComponent },
  {
    path: "addschedule",
    component: AddscheduleComponent,
  },
  {
    path: "edit-schedule/:id",
    component: AddscheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
