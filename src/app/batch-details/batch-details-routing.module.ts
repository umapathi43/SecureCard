import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatchDetailsComponent } from './batch-details.component';
import { BatchdetailsTableComponent } from './batchdetails-table/batchdetails-table.component';

const routes: Routes = [
  { path: '', component: BatchdetailsTableComponent },
  { path: 'batch-details-view', component: BatchDetailsComponent },
  { path: 'batch-details-view/:id', component: BatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchDetailsRoutingModule { }
