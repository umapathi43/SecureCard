import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckCompositionComponent } from './bluck-composition.component';

describe('BluckCompositionComponent', () => {
  let component: BluckCompositionComponent;
  let fixture: ComponentFixture<BluckCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckCompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
