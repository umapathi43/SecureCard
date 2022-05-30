import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashDepositComponent } from './cash-deposit.component';

const routes: Routes = [{ path: '', component: CashDepositComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashDepositRoutingModule { }
