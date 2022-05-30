import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckHsnsacComponent } from './bluck-hsnsac.component';

describe('BluckHsnsacComponent', () => {
  let component: BluckHsnsacComponent;
  let fixture: ComponentFixture<BluckHsnsacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckHsnsacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckHsnsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
