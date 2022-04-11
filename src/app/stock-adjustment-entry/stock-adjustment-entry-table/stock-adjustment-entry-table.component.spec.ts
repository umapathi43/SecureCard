import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StockAdjustmentEntryTableComponent } from './stock-adjustment-entry-table.component';

describe('StockAdjustmentEntryTableComponent', () => {
  let component: StockAdjustmentEntryTableComponent;
  let fixture: ComponentFixture<StockAdjustmentEntryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAdjustmentEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAdjustmentEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
