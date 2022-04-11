import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierPaymentRegisterComponent } from './supplier-payment-register.component';

describe('SupplierPaymentRegisterComponent', () => {
  let component: SupplierPaymentRegisterComponent;
  let fixture: ComponentFixture<SupplierPaymentRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierPaymentRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierPaymentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
