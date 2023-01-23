import { TestBed } from '@angular/core/testing';

import { ImprintLogoService } from './imprint-logo.service';

describe('ImprintLogoService', () => {
  let service: ImprintLogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImprintLogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
