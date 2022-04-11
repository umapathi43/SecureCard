import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { AddstockComponent } from './addstock/addstock.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [StockComponent, AddstockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule
  ]
})
export class StockModule { }
