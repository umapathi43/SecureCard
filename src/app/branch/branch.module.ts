import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AddbranchComponent } from './addbranch/addbranch.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [BranchComponent, AddbranchComponent],
  imports: [
    CommonModule,
    FormsModule,
    BranchRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule
  ]
})
export class BranchModule { }
