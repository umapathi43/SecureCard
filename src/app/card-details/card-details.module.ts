import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './card-details.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { carDetailsRoutingModule } from './card-details-routing.module';
import { CardDisplayComponent } from './card-display/card-display.component';



@NgModule({
  declarations: [
    CardDetailsComponent,
    CardDisplayComponent
  ],
  imports: [
    CommonModule,
    carDetailsRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    NgxDatatableModule,
    NgSelectModule,
    NgbModule,
  ]
})
export class CardDetailsModule { }
