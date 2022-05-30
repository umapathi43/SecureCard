import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesInvoiceEntryComponent } from './sales-invoice-entry.component';

describe('SalesInvoiceEntryComponent', () => {
  let component: SalesInvoiceEntryComponent;
  let fixture: ComponentFixture<SalesInvoiceEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
