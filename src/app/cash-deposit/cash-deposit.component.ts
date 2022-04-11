import { Component, OnInit } from "@angular/core";
export class CashDeposite {
  public entryDate: Date;
  public amount: number;
  public bankName: Date;
}
@Component({
  selector: "app-cash-deposit",
  templateUrl: "./cash-deposit.component.html",
  styleUrls: [
    "./cash-deposit.component.scss",
    "../../assets/sass/libs/datatables.scss",
  ],
})
export class CashDepositComponent implements OnInit {
  constructor() {}

  model = new CashDeposite();
  ngOnInit(): void {}
  onSubmit(form) {
    console.log(form.value);
  }
}
