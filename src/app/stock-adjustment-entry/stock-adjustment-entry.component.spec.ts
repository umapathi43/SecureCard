import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockAdjustmentEntryComponent } from './stock-adjustment-entry.component';

describe('StockAdjustmentEntryComponent', () => {
  let component: StockAdjustmentEntryComponent;
  let fixture: ComponentFixture<StockAdjustmentEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAdjustmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdjustmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
