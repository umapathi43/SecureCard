import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReportsDetailsComponent } from './reports-details.component';

describe('ReportsDetailsComponent', () => {
  let component: ReportsDetailsComponent;
  let fixture: ComponentFixture<ReportsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
