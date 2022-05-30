import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterSaleTableComponent } from './counter-sale-table.component';

describe('CounterSaleTableComponent', () => {
  let component: CounterSaleTableComponent;
  let fixture: ComponentFixture<CounterSaleTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSaleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSaleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
