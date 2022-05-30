import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddsalesmanComponent } from './addsalesman.component';

describe('AddsalesmanComponent', () => {
  let component: AddsalesmanComponent;
  let fixture: ComponentFixture<AddsalesmanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
