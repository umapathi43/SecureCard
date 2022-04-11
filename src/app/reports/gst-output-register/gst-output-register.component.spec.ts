import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstOutputRegisterComponent } from './gst-output-register.component';

describe('GstOutputRegisterComponent', () => {
  let component: GstOutputRegisterComponent;
  let fixture: ComponentFixture<GstOutputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstOutputRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstOutputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
