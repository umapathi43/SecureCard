import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AccountComponent } from "./account.component";
import { BulkCreateAccountsComponent } from "./bulk-create-accounts/bulk-create-accounts.component";
import { CreateaccountComponent } from "./createaccount/createaccount.component";

const routes: Routes = [
  { path: "", component: AccountComponent },
  {
    path: "createaccount",
    component: CreateaccountComponent,
  },
  {
    path: "edit-account/:id",
    component: CreateaccountComponent,
  },
  {
    path: "bulk-create",
    component: BulkCreateAccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
