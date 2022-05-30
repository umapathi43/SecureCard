import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShortageEntryTableComponent } from './shortage-entry-table.component';

describe('ShortageEntryTableComponent', () => {
  let component: ShortageEntryTableComponent;
  let fixture: ComponentFixture<ShortageEntryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortageEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortageEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
