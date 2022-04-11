import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterSaleComponent } from './counter-sale.component';

describe('CounterSaleComponent', () => {
  let component: CounterSaleComponent;
  let fixture: ComponentFixture<CounterSaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
