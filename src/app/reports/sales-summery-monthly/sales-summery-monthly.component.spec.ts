import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSummeryMonthlyComponent } from './sales-summery-monthly.component';

describe('SalesSummeryMonthlyComponent', () => {
  let component: SalesSummeryMonthlyComponent;
  let fixture: ComponentFixture<SalesSummeryMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSummeryMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSummeryMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
