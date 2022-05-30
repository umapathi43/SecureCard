import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportSupplierWiseComponent } from './sales-report-supplier-wise.component';

describe('SalesReportSupplierWiseComponent', () => {
  let component: SalesReportSupplierWiseComponent;
  let fixture: ComponentFixture<SalesReportSupplierWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReportSupplierWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportSupplierWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
