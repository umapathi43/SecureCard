import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateareaComponent } from './createarea.component';

describe('CreateareaComponent', () => {
  let component: CreateareaComponent;
  let fixture: ComponentFixture<CreateareaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
