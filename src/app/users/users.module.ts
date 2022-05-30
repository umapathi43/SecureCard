import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { CreateuserComponent } from "./createuser/createuser.component";
import { NgbDateParserFormatter, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { BulkCreateUsersComponent } from './bulk-create-users/bulk-create-users.component';

@NgModule({
  declarations: [UsersComponent, CreateuserComponent, BulkCreateUsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
  ],
})
export class UsersModule {}
