import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsComponent } from "./reports.component";
import { ReportsDetailsComponent } from "./reports-details/reports-details.component";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReportsDetailsByidComponent } from "./reports-details-byid/reports-details-byid.component";
import { SalesRegisterReportComponent } from "./sales-register-report/sales-register-report.component";
import { ChartistModule } from "ng-chartist";
import { MatchHeightModule } from "app/shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { AngularResizedEventModule } from "angular-resize-event";
import { SalesRegisterReportMonthlyComponent } from './sales-register-report-monthly/sales-register-report-monthly.component';
import { SalesPartWiseReportMonthlyComponent } from './sales-part-wise-report-monthly/sales-part-wise-report-monthly.component';
import { SalesReportSupplierWiseComponent } from './sales-report-supplier-wise/sales-report-supplier-wise.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';
import { ReportPayableSupplierWiseComponent } from './report-payable-supplier-wise/report-payable-supplier-wise.component';
import { StockReportItemWiseComponent } from './stock-report-item-wise/stock-report-item-wise.component';
import { ScheduleRegisterComponent } from './schedule-register/schedule-register.component';
import { SupplierPaymentRegisterComponent } from './supplier-payment-register/supplier-payment-register.component';
import { CompositionWiseSaleReportComponent } from './composition-wise-sale-report/composition-wise-sale-report.component';
import { ExpiryReportComponent } from './expiry-report/expiry-report.component';
import { SalesSummeryMonthlyComponent } from './sales-summery-monthly/sales-summery-monthly.component';
import { GstInputRegisterComponent } from './gst-input-register/gst-input-register.component';
import { GstOutputRegisterComponent } from './gst-output-register/gst-output-register.component';

@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent,
    ReportsDetailsByidComponent,
    SalesRegisterReportComponent,
    SalesRegisterReportMonthlyComponent,
    SalesPartWiseReportMonthlyComponent,
    SalesReportSupplierWiseComponent,
    PurchaseReportComponent,
    ReportPayableSupplierWiseComponent,
    StockReportItemWiseComponent,
    ScheduleRegisterComponent,
    SupplierPaymentRegisterComponent,
    CompositionWiseSaleReportComponent,
    ExpiryReportComponent,
    SalesSummeryMonthlyComponent,
    GstInputRegisterComponent,
    GstOutputRegisterComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    FormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgbModule,
    ChartistModule,
    MatchHeightModule,
    NgApexchartsModule,
    AngularResizedEventModule,
  ],
})
export class ReportsModule {}
