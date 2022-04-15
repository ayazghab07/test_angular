import { TestBed } from '@angular/core/testing';

import { ParieurService } from './parieur.service';

describe('ParieurService', () => {
  let service: ParieurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParieurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
