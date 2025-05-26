import { TestBed } from '@angular/core/testing';

import { CountriesCodesService } from './countries-codes.service';

describe('CountriesCodesService', () => {
  let service: CountriesCodesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesCodesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
