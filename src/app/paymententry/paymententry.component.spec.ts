import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaymententryComponent } from './paymententry.component';

describe('PaymententryComponent', () => {
  let component: PaymententryComponent;
  let fixture: ComponentFixture<PaymententryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymententryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymententryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
