import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateAccountsComponent } from './bulk-create-accounts.component';

describe('BulkCreateAccountsComponent', () => {
  let component: BulkCreateAccountsComponent;
  let fixture: ComponentFixture<BulkCreateAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCreateAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCreateAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
