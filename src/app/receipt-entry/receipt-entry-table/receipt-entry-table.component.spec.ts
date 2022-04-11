import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReceiptEntryTableComponent } from './receipt-entry-table.component';

describe('ReceiptEntryTableComponent', () => {
  let component: ReceiptEntryTableComponent;
  let fixture: ComponentFixture<ReceiptEntryTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptEntryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptEntryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
