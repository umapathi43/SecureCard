import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupRoutingModule } from "./group-routing.module";
import { GroupComponent } from "./group.component";
import { AddgroupComponent } from "./addgroup/addgroup.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { BluckGroupComponent } from './bluck-group/bluck-group.component';

@NgModule({
  declarations: [GroupComponent, AddgroupComponent, BluckGroupComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
  ],
})
export class GroupModule {}
