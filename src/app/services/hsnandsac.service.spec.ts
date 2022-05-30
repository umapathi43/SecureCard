import { TestBed } from '@angular/core/testing';

import { HsnandsacService } from './hsnandsac.service';

describe('HsnandsacService', () => {
  let service: HsnandsacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsnandsacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
