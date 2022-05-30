import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportsDetailsByidComponent } from './reports-details-byid.component';

describe('ReportsDetailsByidComponent', () => {
  let component: ReportsDetailsByidComponent;
  let fixture: ComponentFixture<ReportsDetailsByidComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDetailsByidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDetailsByidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
