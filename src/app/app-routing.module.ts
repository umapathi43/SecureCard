import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from "./shared/auth/auth-guard.service";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "",
    component: FullLayoutComponent,
    data: { title: "full Views" },
    children: Full_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: ContentLayoutComponent,
    data: { title: "content Views" },
    children: CONTENT_ROUTES,
  },
  {
    path: "stockAdjustmentEntry",
    loadChildren: () =>
      import("./stock-adjustment-entry/stock-adjustment-entry.module").then(
        (m) => m.StockAdjustmentEntryModule
      ),
  },
  {
    path: "cashWithdraw",
    loadChildren: () =>
      import("./cash-withdraw/cash-withdraw.module").then(
        (m) => m.CashWithdrawModule
      ),
  },
  {
    path: "cashDeposit",
    loadChildren: () =>
      import("./cash-deposit/cash-deposit.module").then(
        (m) => m.CashDepositModule
      ),
  },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  {
    path: "**",
    redirectTo: "pages/error",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
