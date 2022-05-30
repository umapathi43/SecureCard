import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BatchDetailsRoutingModule } from "./batch-details-routing.module";
import { BatchDetailsComponent } from "./batch-details.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BatchdetailsTableComponent } from './batchdetails-table/batchdetails-table.component';

@NgModule({
  declarations: [BatchDetailsComponent, BatchdetailsTableComponent],
  imports: [
    CommonModule,
    BatchDetailsRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
  ],
})
export class BatchDetailsModule {}
