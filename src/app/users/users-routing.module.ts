import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BulkCreateUsersComponent } from "./bulk-create-users/bulk-create-users.component";
import { CreateuserComponent } from "./createuser/createuser.component";

import { UsersComponent } from "./users.component";

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: "createuser", component: CreateuserComponent },
  {
    path: "edit-user/:id",
    component: CreateuserComponent,
  },
  {
    path: "bulk-create",
    component: BulkCreateUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
