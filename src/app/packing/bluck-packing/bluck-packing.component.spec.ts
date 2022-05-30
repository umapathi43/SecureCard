import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckPackingComponent } from './bluck-packing.component';

describe('BluckPackingComponent', () => {
  let component: BluckPackingComponent;
  let fixture: ComponentFixture<BluckPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckPackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
