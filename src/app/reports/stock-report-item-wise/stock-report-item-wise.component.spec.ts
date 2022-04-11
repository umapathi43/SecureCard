import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockReportItemWiseComponent } from './stock-report-item-wise.component';

describe('StockReportItemWiseComponent', () => {
  let component: StockReportItemWiseComponent;
  let fixture: ComponentFixture<StockReportItemWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockReportItemWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockReportItemWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
