import { TestBed } from '@angular/core/testing';

import { PurchaseEntryService } from './purchase-entry.service';

describe('PurchaseEntryService', () => {
  let service: PurchaseEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
