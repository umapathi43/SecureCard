import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymentEntryTableComponent } from './payment-entry-table.component';

describe('PaymentEntryTableComponent', () => {
  let component: PaymentEntryTableComponent;
  let fixture: ComponentFixture<PaymentEntryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
