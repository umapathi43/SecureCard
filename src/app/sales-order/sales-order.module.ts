import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SalesOrderRoutingModule } from "./sales-order-routing.module";
import { SalesOrderComponent } from "./sales-order.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SalesOrderTableComponent } from './sales-order-table/sales-order-table.component';

@NgModule({
  declarations: [SalesOrderComponent, SalesOrderTableComponent],
  imports: [
    CommonModule,
    SalesOrderRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class SalesOrderModule {}
