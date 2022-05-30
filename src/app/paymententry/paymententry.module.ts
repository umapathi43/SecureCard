import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaymententryRoutingModule } from "./paymententry-routing.module";
import { PaymententryComponent } from "./paymententry.component";

import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PaymentEntryTableComponent } from './payment-entry-table/payment-entry-table.component';

@NgModule({
  declarations: [PaymententryComponent, PaymentEntryTableComponent],
  imports: [
    CommonModule,
    PaymententryRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class PaymententryModule {}
