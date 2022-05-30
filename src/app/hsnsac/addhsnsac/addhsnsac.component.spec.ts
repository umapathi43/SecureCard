import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddhsnsacComponent } from './addhsnsac.component';

describe('AddhsnsacComponent', () => {
  let component: AddhsnsacComponent;
  let fixture: ComponentFixture<AddhsnsacComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhsnsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhsnsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
