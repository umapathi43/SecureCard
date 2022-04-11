import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPayableSupplierWiseComponent } from './report-payable-supplier-wise.component';

describe('ReportPayableSupplierWiseComponent', () => {
  let component: ReportPayableSupplierWiseComponent;
  let fixture: ComponentFixture<ReportPayableSupplierWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPayableSupplierWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPayableSupplierWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
