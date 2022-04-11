import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscountslabComponent } from './discountslab.component';

describe('DiscountslabComponent', () => {
  let component: DiscountslabComponent;
  let fixture: ComponentFixture<DiscountslabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountslabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountslabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
