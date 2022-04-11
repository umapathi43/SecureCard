import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkSupplierCreateComponent } from './bulk-supplier-create.component';

describe('BulkSupplierCreateComponent', () => {
  let component: BulkSupplierCreateComponent;
  let fixture: ComponentFixture<BulkSupplierCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkSupplierCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkSupplierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
