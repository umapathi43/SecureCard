import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckManufacturerComponent } from './bluck-manufacturer.component';

describe('BluckManufacturerComponent', () => {
  let component: BluckManufacturerComponent;
  let fixture: ComponentFixture<BluckManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckManufacturerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
