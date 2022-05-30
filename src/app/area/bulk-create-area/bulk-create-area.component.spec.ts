import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateAreaComponent } from './bulk-create-area.component';

describe('BulkCreateAreaComponent', () => {
  let component: BulkCreateAreaComponent;
  let fixture: ComponentFixture<BulkCreateAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCreateAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCreateAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
