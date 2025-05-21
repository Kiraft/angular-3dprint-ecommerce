import { TestBed } from '@angular/core/testing';

import { RellenoserviceService } from './rellenoservice.service';

describe('RellenoserviceService', () => {
  let service: RellenoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RellenoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
