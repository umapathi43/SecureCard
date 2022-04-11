import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddmanufacturerComponent } from "./addmanufacturer/addmanufacturer.component";
import { BluckManufacturerComponent } from "./bluck-manufacturer/bluck-manufacturer.component";

import { ManufacturerComponent } from "./manufacturer.component";

const routes: Routes = [
  { path: "", component: ManufacturerComponent },
  {
    path: "bluck-manuf",
    component: BluckManufacturerComponent,
  },
  {
    path: "createmanufacturer",
    component: AddmanufacturerComponent,
  },
  {
    path: "edit-manufacturer/:id",
    component: AddmanufacturerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManufacturerRoutingModule {}
