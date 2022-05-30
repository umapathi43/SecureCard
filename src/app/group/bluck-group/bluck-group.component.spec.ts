import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckGroupComponent } from './bluck-group.component';

describe('BluckGroupComponent', () => {
  let component: BluckGroupComponent;
  let fixture: ComponentFixture<BluckGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
