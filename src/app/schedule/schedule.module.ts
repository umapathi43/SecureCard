import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScheduleRoutingModule } from "./schedule-routing.module";
import { ScheduleComponent } from "./schedule.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AddscheduleComponent } from "./addschedule/addschedule.component";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [ScheduleComponent, AddscheduleComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
  ],
})
export class ScheduleModule {}
