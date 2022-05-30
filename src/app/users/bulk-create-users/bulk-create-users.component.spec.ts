import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkCreateUsersComponent } from './bulk-create-users.component';

describe('BulkCreateUsersComponent', () => {
  let component: BulkCreateUsersComponent;
  let fixture: ComponentFixture<BulkCreateUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkCreateUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkCreateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
