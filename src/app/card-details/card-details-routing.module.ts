import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './card-details.component';
import { CardDisplayComponent } from './card-display/card-display.component';

const routes: Routes = [
  { path: '', component: CardDetailsComponent },
  {
      path: "card-display",
      component: CardDisplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class carDetailsRoutingModule { }