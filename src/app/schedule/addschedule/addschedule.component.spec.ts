import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddscheduleComponent } from './addschedule.component';

describe('AddscheduleComponent', () => {
  let component: AddscheduleComponent;
  let fixture: ComponentFixture<AddscheduleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
