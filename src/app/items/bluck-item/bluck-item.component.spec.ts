import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluckItemComponent } from './bluck-item.component';

describe('BluckItemComponent', () => {
  let component: BluckItemComponent;
  let fixture: ComponentFixture<BluckItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluckItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
