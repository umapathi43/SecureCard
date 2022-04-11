import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositionRoutingModule } from './composition-routing.module';
import { CompositionComponent } from './composition.component';
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddcompositionComponent } from './addcomposition/addcomposition.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BluckCompositionComponent } from './bluck-composition/bluck-composition.component';

@NgModule({
  declarations: [CompositionComponent, AddcompositionComponent, BluckCompositionComponent],
  imports: [
    CommonModule,
    CompositionRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule
  ]
})
export class CompositionModule { }
