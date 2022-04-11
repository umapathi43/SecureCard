import { ReportsModule } from "./../../reports/reports.module";
import { CounterSaleModule } from "./../../counter-sale/counter-sale.module";
import { Routes, RouterModule } from "@angular/router";

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("../../dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "pages",
    loadChildren: () =>
      import("../../pages/full-pages/full-pages.module").then(
        (m) => m.FullPagesModule
      ),
  },
  {
    path: "supplier",
    loadChildren: () =>
      import("../../supplier/supplier.module").then((m) => m.SupplierModule),
  },
  {
    path: "account",
    loadChildren: () =>
      import("../../account/account.module").then((m) => m.AccountModule),
  },
  {
    path: "area",
    loadChildren: () =>
      import("../../area/area.module").then((m) => m.AreaModule),
  },

  {
    path: "users",
    loadChildren: () =>
      import("../../users/users.module").then((m) => m.UsersModule),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("../../user-registration/user-registration.module").then((m) => m.UserRegistrationModule),
  },
  {
    path: "card-details",
    loadChildren: () =>
      import("../../card-details/card-details.module").then((m) => m.CardDetailsModule),
  },
  {
    path: "salesman",
    loadChildren: () =>
      import("../../salesman/salesman.module").then((m) => m.SalesmanModule),
  },
  {
    path: "items",
    loadChildren: () =>
      import("../../items/items.module").then((m) => m.ItemsModule),
  },
  {
    path: "discountslab",
    loadChildren: () =>
      import("../../discountslab/discountslab.module").then(
        (m) => m.DiscountslabModule
      ),
  },
  {
    path: "manufacturer",
    loadChildren: () =>
      import("../../manufacturer/manufacturer.module").then(
        (m) => m.ManufacturerModule
      ),
  },
  {
    path: "group",
    loadChildren: () =>
      import("../../group/group.module").then((m) => m.GroupModule),
  },
  {
    path: "storetype",
    loadChildren: () =>
      import("../../storetype/storetype.module").then((m) => m.StoretypeModule),
  },
  {
    path: "schedule",
    loadChildren: () =>
      import("../../schedule/schedule.module").then((m) => m.ScheduleModule),
  },
  {
    path: "hsnsac",
    loadChildren: () =>
      import("../../hsnsac/hsnsac.module").then((m) => m.HsnsacModule),
  },
  {
    path: "composition",
    loadChildren: () =>
      import("../../composition/composition.module").then(
        (m) => m.CompositionModule
      ),
  },
  {
    path: "branch",
    loadChildren: () =>
      import("../../branch/branch.module").then((m) => m.BranchModule),
  },
  {
    path: "stock",
    loadChildren: () =>
      import("../../stock/stock.module").then((m) => m.StockModule),
  },
  {
    path: "packing",
    loadChildren: () =>
      import("../../packing/packing.module").then((m) => m.PackingModule),
  },
  {
    path: "purchase-entry",
    loadChildren: () =>
      import("../../purchase/purchase.module").then((m) => m.PurchaseModule),
  },
  {
    path: "payment-entry",
    loadChildren: () =>
      import("../../paymententry/paymententry.module").then(
        (m) => m.PaymententryModule
      ),
  },
  {
    path: "purchase-order",
    loadChildren: () =>
      import("../../purchase-order/purchase-order.module").then(
        (m) => m.PurchaseOrderModule
      ),
  },
  {
    path: "order-generation",
    loadChildren: () =>
      import("../../order-generation/order-generation.module").then(
        (m) => m.OrderGenerationModule
      ),
  },
  {
    path: "opening-stock-entry",
    loadChildren: () =>
      import("../../opening-stock-entry/opening-stock-entry.module").then(
        (m) => m.OpeningStockEntryModule
      ),
  },
  {
    path: "batch-details",
    loadChildren: () =>
      import("../../batch-details/batch-details.module").then(
        (m) => m.BatchDetailsModule
      ),
  },
  {
    path: "receipt-entry",
    loadChildren: () =>
      import("../../receipt-entry/receipt-entry.module").then(
        (m) => m.ReceiptEntryModule
      ),
  },
  {
    path: "counter-sale",
    loadChildren: () =>
      import("../../counter-sale/counter-sale.module").then(
        (m) => m.CounterSaleModule
      ),
  },
  {
    path: "sales-order",
    loadChildren: () =>
      import("../../sales-order/sales-order.module").then(
        (m) => m.SalesOrderModule
      ),
  },
  {
    path: "shortage-entry",
    loadChildren: () =>
      import("../../shortage-entry/shortage-entry.module").then(
        (m) => m.ShortageEntryModule
      ),
  },
  {
    path: "stock-adjustment-entry",
    loadChildren: () =>
      import("../../stock-adjustment-entry/stock-adjustment-entry.module").then(
        (m) => m.StockAdjustmentEntryModule
      ),
  },
  {
    path: "cash-withdraw",
    loadChildren: () =>
      import("../../cash-withdraw/cash-withdraw.module").then(
        (m) => m.CashWithdrawModule
      ),
  },
  {
    path: "cash-deposit",
    loadChildren: () =>
      import("../../cash-deposit/cash-deposit.module").then(
        (m) => m.CashDepositModule
      ),
  },
  {
    path: "sales-invoice-entry",
    loadChildren: () =>
      import("../../sales-invoice-entry/sales-invoice-entry.module").then(
        (m) => m.SalesInvoiceEntryModule
      ),
  },
  {
    path: "reports",
    loadChildren: () =>
      import("../../reports/reports.module").then((m) => m.ReportsModule),
  },
];
