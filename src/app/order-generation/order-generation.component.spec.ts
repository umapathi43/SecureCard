import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OrderGenerationComponent } from './order-generation.component';

describe('OrderGenerationComponent', () => {
  let component: OrderGenerationComponent;
  let fixture: ComponentFixture<OrderGenerationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
