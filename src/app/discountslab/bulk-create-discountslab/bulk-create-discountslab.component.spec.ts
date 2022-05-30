import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateDiscountslabComponent } from './bulk-create-discountslab.component';

describe('BulkCreateDiscountslabComponent', () => {
  let component: BulkCreateDiscountslabComponent;
  let fixture: ComponentFixture<BulkCreateDiscountslabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCreateDiscountslabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCreateDiscountslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
