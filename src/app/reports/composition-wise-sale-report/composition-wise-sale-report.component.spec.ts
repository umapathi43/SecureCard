import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionWiseSaleReportComponent } from './composition-wise-sale-report.component';

describe('CompositionWiseSaleReportComponent', () => {
  let component: CompositionWiseSaleReportComponent;
  let fixture: ComponentFixture<CompositionWiseSaleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompositionWiseSaleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionWiseSaleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
