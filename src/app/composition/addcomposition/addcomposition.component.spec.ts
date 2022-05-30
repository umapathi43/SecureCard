import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddcompositionComponent } from './addcomposition.component';

describe('AddcompositionComponent', () => {
  let component: AddcompositionComponent;
  let fixture: ComponentFixture<AddcompositionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcompositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
