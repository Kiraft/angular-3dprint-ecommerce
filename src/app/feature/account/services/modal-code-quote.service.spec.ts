import { TestBed } from '@angular/core/testing';

import { ModalCodeQuoteService } from './modal-code-quote.service';

describe('ModalCodeQuoteService', () => {
  let service: ModalCodeQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCodeQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
