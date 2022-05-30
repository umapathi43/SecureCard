import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateSalesmanComponent } from './bulk-create-salesman.component';

describe('BulkCreateSalesmanComponent', () => {
  let component: BulkCreateSalesmanComponent;
  let fixture: ComponentFixture<BulkCreateSalesmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCreateSalesmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCreateSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
