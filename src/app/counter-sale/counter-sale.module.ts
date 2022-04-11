import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CounterSaleRoutingModule } from "./counter-sale-routing.module";
import { CounterSaleComponent } from "./counter-sale.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CounterSaleTableComponent } from './counter-sale-table/counter-sale-table.component';

@NgModule({
  declarations: [CounterSaleComponent, CounterSaleTableComponent],
  imports: [
    CommonModule,
    CounterSaleRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class CounterSaleModule {}
