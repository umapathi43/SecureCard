import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration.component';
import { FormsModule } from '@angular/forms';
import { UserRegistrationRoutingModule } from 'app/user-registration/user-registration-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedModule } from 'app/shared/shared.module';



@NgModule({
  declarations: [
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRegistrationRoutingModule,
    NgxDatatableModule,
    NgbModule,
    NgxSpinnerModule,
    SharedModule,
  ]
})
export class UserRegistrationModule { }
