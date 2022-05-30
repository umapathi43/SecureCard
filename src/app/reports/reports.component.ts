import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent implements OnInit {
  activeTab = "account"; // Keep content

  constructor() {}

  ngOnInit(): void {}
  activeswitch(action) {
    this.activeTab = action;
  }
}
