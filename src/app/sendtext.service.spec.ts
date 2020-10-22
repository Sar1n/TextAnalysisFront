import { TestBed } from '@angular/core/testing';

import { SendtextService } from './sendtext.service';

describe('SendtextService', () => {
  let service: SendtextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendtextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
