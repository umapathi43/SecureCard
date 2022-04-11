import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesRegisterReportMonthlyComponent } from './sales-register-report-monthly.component';

describe('SalesRegisterReportMonthlyComponent', () => {
  let component: SalesRegisterReportMonthlyComponent;
  let fixture: ComponentFixture<SalesRegisterReportMonthlyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRegisterReportMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRegisterReportMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
