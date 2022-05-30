import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountslabRoutingModule } from './discountslab-routing.module';
import { DiscountslabComponent } from './discountslab.component';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { AdddiscountslabComponent } from './adddiscountslab/adddiscountslab.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BulkCreateDiscountslabComponent } from './bulk-create-discountslab/bulk-create-discountslab.component';

@NgModule({
  declarations: [DiscountslabComponent, AdddiscountslabComponent, BulkCreateDiscountslabComponent],
  imports: [
    CommonModule,
    FormsModule,
    DiscountslabRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule
  ]
})
export class DiscountslabModule { }
