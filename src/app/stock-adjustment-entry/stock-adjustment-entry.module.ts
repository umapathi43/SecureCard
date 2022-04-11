import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StockAdjustmentEntryRoutingModule } from "./stock-adjustment-entry-routing.module";
import { StockAdjustmentEntryComponent } from "./stock-adjustment-entry.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StockAdjustmentEntryTableComponent } from "./stock-adjustment-entry-table/stock-adjustment-entry-table.component";

@NgModule({
  declarations: [
    StockAdjustmentEntryComponent,
    StockAdjustmentEntryTableComponent,
  ],
  imports: [
    CommonModule,
    StockAdjustmentEntryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class StockAdjustmentEntryModule {}
