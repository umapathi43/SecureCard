import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CashDepositRoutingModule } from "./cash-deposit-routing.module";
import { CashDepositComponent } from "./cash-deposit.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [CashDepositComponent],
  imports: [
    CommonModule,
    CashDepositRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class CashDepositModule {}
