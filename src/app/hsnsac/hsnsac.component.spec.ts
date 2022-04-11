import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HsnsacComponent } from './hsnsac.component';

describe('HsnsacComponent', () => {
  let component: HsnsacComponent;
  let fixture: ComponentFixture<HsnsacComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HsnsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsnsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
