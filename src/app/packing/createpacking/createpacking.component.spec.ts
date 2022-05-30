import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreatepackingComponent } from './createpacking.component';

describe('CreatepackingComponent', () => {
  let component: CreatepackingComponent;
  let fixture: ComponentFixture<CreatepackingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
