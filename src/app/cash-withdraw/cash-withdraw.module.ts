import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CashWithdrawRoutingModule } from "./cash-withdraw-routing.module";
import { CashWithdrawComponent } from "./cash-withdraw.component";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [CashWithdrawComponent],
  imports: [
    CommonModule,
    CashWithdrawRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ],
})
export class CashWithdrawModule {}
