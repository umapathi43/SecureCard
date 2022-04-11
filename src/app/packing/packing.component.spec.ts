import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackingComponent } from './packing.component';

describe('PackingComponent', () => {
  let component: PackingComponent;
  let fixture: ComponentFixture<PackingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
