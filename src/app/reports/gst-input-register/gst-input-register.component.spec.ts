import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstInputRegisterComponent } from './gst-input-register.component';

describe('GstInputRegisterComponent', () => {
  let component: GstInputRegisterComponent;
  let fixture: ComponentFixture<GstInputRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GstInputRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GstInputRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
