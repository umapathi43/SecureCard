import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ShortageEntryRoutingModule } from "./shortage-entry-routing.module";
import { ShortageEntryComponent } from "./shortage-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ShortageEntryTableComponent } from './shortage-entry-table/shortage-entry-table.component';

@NgModule({
  declarations: [ShortageEntryComponent, ShortageEntryTableComponent],
  imports: [
    CommonModule,
    ShortageEntryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class ShortageEntryModule {}
