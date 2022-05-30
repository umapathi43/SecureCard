import { SalesPartWiseReportMonthlyComponent } from "./sales-part-wise-report-monthly/sales-part-wise-report-monthly.component";
import { SalesRegisterReportMonthlyComponent } from "./sales-register-report-monthly/sales-register-report-monthly.component";
import { ReportsDetailsByidComponent } from "./reports-details-byid/reports-details-byid.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportsDetailsComponent } from "./reports-details/reports-details.component";

import { ReportsComponent } from "./reports.component";
import { SalesRegisterReportComponent } from "./sales-register-report/sales-register-report.component";
import { SalesReportSupplierWiseComponent } from "./sales-report-supplier-wise/sales-report-supplier-wise.component";
import { PurchaseReportComponent } from "./purchase-report/purchase-report.component";
import { ReportPayableSupplierWiseComponent } from "./report-payable-supplier-wise/report-payable-supplier-wise.component";
import { StockReportItemWiseComponent } from "./stock-report-item-wise/stock-report-item-wise.component";
import { ScheduleRegisterComponent } from "./schedule-register/schedule-register.component";
import { SupplierPaymentRegisterComponent } from "./supplier-payment-register/supplier-payment-register.component";
import { CompositionWiseSaleReportComponent } from "./composition-wise-sale-report/composition-wise-sale-report.component";
import { ExpiryReportComponent } from "./expiry-report/expiry-report.component";
import { SalesSummeryMonthlyComponent } from "./sales-summery-monthly/sales-summery-monthly.component";
import { GstInputRegisterComponent } from "./gst-input-register/gst-input-register.component";
import { GstOutputRegisterComponent } from "./gst-output-register/gst-output-register.component";

const routes: Routes = [
  { path: "", component: ReportsComponent },
  { path: "details", component: ReportsDetailsComponent },
  { path: "detail/:id", component: ReportsDetailsByidComponent },
  {
    path: "sales_monthly_report/:id",
    component: SalesRegisterReportMonthlyComponent,
  },
  { path: "sales_report", component: SalesRegisterReportComponent },
  { path: "sales_part_report", component: SalesPartWiseReportMonthlyComponent },
  { path: "sales-report-supplier-wise", component: SalesReportSupplierWiseComponent },
  { path: "purchase_report", component: PurchaseReportComponent },
  { path: "outstanding-report-supplier-wise", component: ReportPayableSupplierWiseComponent},
  { path: "stock-report-item-wise", component:StockReportItemWiseComponent},
  { path: "schedule-register", component:ScheduleRegisterComponent},
  { path: "supplier-payment-register", component: SupplierPaymentRegisterComponent},
  { path: "Composition-wise-sale-report", component:CompositionWiseSaleReportComponent},
  { path: "expiry-report", component:ExpiryReportComponent},
  { path: "Sales-summary-monthly", component:SalesSummeryMonthlyComponent},
  { path: "gst-input-register", component:GstInputRegisterComponent},
  { path: "gst-output-register", component:GstOutputRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
