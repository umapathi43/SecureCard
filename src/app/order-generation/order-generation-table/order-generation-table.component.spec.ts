import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderGenerationTableComponent } from './order-generation-table.component';

describe('OrderGenerationTableComponent', () => {
  let component: OrderGenerationTableComponent;
  let fixture: ComponentFixture<OrderGenerationTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderGenerationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGenerationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
