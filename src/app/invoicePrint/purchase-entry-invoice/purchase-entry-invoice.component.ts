import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-purchase-entry-invoice",
  templateUrl: "./purchase-entry-invoice.component.html",
  styleUrls: ["./purchase-entry-invoice.component.scss"],
})
export class PurchaseEntryInvoiceComponent implements OnInit {
  active = 1;
  activeTab = "general";
  titleText = "Sale Challan";
  emailColor = "rgb(9, 72, 179)";
  headercolor = "rgb(255, 255, 255)";
  rowFontSize = "12px";
  pringPadding = ".1in";
  leftMargin = ".1";
  rightMargin = ".1";
  topMargin = ".1";
  bottomMargin = ".1";
  compMobileNo: any = true;
  compAddress: any = true;
  compGst: any = true;
  compEmail: any = true;
  patName: any = true;
  patAddress: any = true;
  patMobileNo: any = true;
  itemName: any = true;
  itemBatch: any = true;
  footerCondi: any = true;
  footerText: any = [
    "1) Goods once sold not be taken back &amp; no cash  Refund.",
    "2) Good may be exchanged with in week only on the presentation of Cash Memo(timing:13pm to 4pm).",
    "3) No Gurantee for Colours &amp; Pillings.",
  ];

  constructor() {}

  ngOnInit(): void {}
  activeswitch(action) {
    this.activeTab = action;
  }
  marginChange(event, action) {
    if (action == "left") {
      this.pringPadding =
        this.topMargin +
        "in " +
        this.rightMargin +
        "in " +
        this.bottomMargin +
        "in " +
        event +
        "in";
    } else if (action == "right") {
      this.pringPadding =
        this.topMargin +
        "in " +
        event +
        "in " +
        this.bottomMargin +
        "in " +
        this.leftMargin +
        "in";
    } else if (action == "top") {
      this.pringPadding =
        event +
        "in " +
        this.rightMargin +
        "in " +
        this.bottomMargin +
        "in " +
        this.leftMargin +
        "in";
    } else {
      this.pringPadding =
        this.topMargin +
        "in " +
        this.rightMargin +
        "in " +
        event +
        "in " +
        this.leftMargin +
        "in";
    }
  }
}
