import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstockComponent } from './addstock/addstock.component';

import { StockComponent } from './stock.component';

const routes: Routes = [{ path: '', component: StockComponent },

{
  path: "addstock",
  component: AddstockComponent,
},
{
  path: "edit-stock/:id",
  component: AddstockComponent,
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
