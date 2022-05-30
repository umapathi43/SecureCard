import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashDepositComponent } from './cash-deposit.component';

describe('CashDepositComponent', () => {
  let component: CashDepositComponent;
  let fixture: ComponentFixture<CashDepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
