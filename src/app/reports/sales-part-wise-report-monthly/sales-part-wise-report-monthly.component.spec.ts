import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesPartWiseReportMonthlyComponent } from './sales-part-wise-report-monthly.component';

describe('SalesPartWiseReportMonthlyComponent', () => {
  let component: SalesPartWiseReportMonthlyComponent;
  let fixture: ComponentFixture<SalesPartWiseReportMonthlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesPartWiseReportMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesPartWiseReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
