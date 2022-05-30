import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesInvoiceEntryTableComponent } from './sales-invoice-entry-table.component';

describe('SalesInvoiceEntryTableComponent', () => {
  let component: SalesInvoiceEntryTableComponent;
  let fixture: ComponentFixture<SalesInvoiceEntryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesInvoiceEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesInvoiceEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
