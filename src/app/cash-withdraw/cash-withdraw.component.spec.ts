import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashWithdrawComponent } from './cash-withdraw.component';

describe('CashWithdrawComponent', () => {
  let component: CashWithdrawComponent;
  let fixture: ComponentFixture<CashWithdrawComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
