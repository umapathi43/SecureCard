import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaymentEntryTableComponent } from "./payment-entry-table/payment-entry-table.component";

import { PaymententryComponent } from "./paymententry.component";

const routes: Routes = [
  { path: "", component: PaymentEntryTableComponent },
  { path: "payment-entry-details", component: PaymententryComponent },
  { path: "payment-entry-details/:id", component: PaymententryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymententryRoutingModule {}
