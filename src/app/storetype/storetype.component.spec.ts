import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StoretypeComponent } from './storetype.component';

describe('StoretypeComponent', () => {
  let component: StoretypeComponent;
  let fixture: ComponentFixture<StoretypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StoretypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoretypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
