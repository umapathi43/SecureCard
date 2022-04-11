import { TestBed } from '@angular/core/testing';

import { DiscountslabService } from './discountslab.service';

describe('DiscountslabService', () => {
  let service: DiscountslabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountslabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
