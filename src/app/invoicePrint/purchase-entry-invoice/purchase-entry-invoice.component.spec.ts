import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PurchaseEntryInvoiceComponent } from './purchase-entry-invoice.component';

describe('PurchaseEntryInvoiceComponent', () => {
  let component: PurchaseEntryInvoiceComponent;
  let fixture: ComponentFixture<PurchaseEntryInvoiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseEntryInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseEntryInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
