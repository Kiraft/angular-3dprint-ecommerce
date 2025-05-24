import { TestBed } from '@angular/core/testing';

import { QuotesdbService } from './quotesdb.service';

describe('QuotesdbService', () => {
  let service: QuotesdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
