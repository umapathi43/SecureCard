import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReceiptEntryComponent } from './receipt-entry.component';

describe('ReceiptEntryComponent', () => {
  let component: ReceiptEntryComponent;
  let fixture: ComponentFixture<ReceiptEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
