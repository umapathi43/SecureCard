import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpeningStockEntryComponent } from './opening-stock-entry.component';

describe('OpeningStockEntryComponent', () => {
  let component: OpeningStockEntryComponent;
  let fixture: ComponentFixture<OpeningStockEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningStockEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningStockEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
