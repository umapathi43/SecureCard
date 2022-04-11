import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HsnsacRoutingModule } from "./hsnsac-routing.module";
import { HsnsacComponent } from "./hsnsac.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddhsnsacComponent } from './addhsnsac/addhsnsac.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BluckHsnsacComponent } from './bluck-hsnsac/bluck-hsnsac.component';

@NgModule({
  declarations: [HsnsacComponent, AddhsnsacComponent, BluckHsnsacComponent],
  imports: [CommonModule, HsnsacRoutingModule, FormsModule, NgxDatatableModule, NgxSpinnerModule],
})
export class HsnsacModule {}
