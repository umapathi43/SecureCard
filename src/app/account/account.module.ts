import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountComponent } from "./account.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module"
import { NgxSpinnerModule } from "ngx-spinner";
import { BulkCreateAccountsComponent } from './bulk-create-accounts/bulk-create-accounts.component';

@NgModule({
  declarations: [AccountComponent, CreateaccountComponent, BulkCreateAccountsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    NgxDatatableModule,
    NgbModule,
    SharedModule,
    NgxSpinnerModule,
  ],
})
export class AccountModule {}
