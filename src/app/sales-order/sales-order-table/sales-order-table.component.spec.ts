import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesOrderTableComponent } from './sales-order-table.component';

describe('SalesOrderTableComponent', () => {
  let component: SalesOrderTableComponent;
  let fixture: ComponentFixture<SalesOrderTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
