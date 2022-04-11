import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddstockComponent } from './addstock.component';

describe('AddstockComponent', () => {
  let component: AddstockComponent;
  let fixture: ComponentFixture<AddstockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
