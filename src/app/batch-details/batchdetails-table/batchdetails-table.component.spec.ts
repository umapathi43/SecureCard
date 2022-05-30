import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchdetailsTableComponent } from './batchdetails-table.component';

describe('BatchdetailsTableComponent', () => {
  let component: BatchdetailsTableComponent;
  let fixture: ComponentFixture<BatchdetailsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchdetailsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchdetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
