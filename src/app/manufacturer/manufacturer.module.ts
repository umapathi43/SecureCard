import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManufacturerRoutingModule } from "./manufacturer-routing.module";
import { ManufacturerComponent } from "./manufacturer.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddmanufacturerComponent } from "./addmanufacturer/addmanufacturer.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { BluckManufacturerComponent } from './bluck-manufacturer/bluck-manufacturer.component';

@NgModule({
  declarations: [ManufacturerComponent, AddmanufacturerComponent, BluckManufacturerComponent],
  imports: [
    CommonModule,
    ManufacturerRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
  ],
})
export class ManufacturerModule {}
