import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AreaRoutingModule } from "./area-routing.module";
import { AreaComponent } from "./area.component";
import { CreateareaComponent } from "./createarea/createarea.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { BulkCreateAreaComponent } from './bulk-create-area/bulk-create-area.component';

@NgModule({
  declarations: [AreaComponent, CreateareaComponent, BulkCreateAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AreaRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule,
  ],
})
export class AreaModule {}
