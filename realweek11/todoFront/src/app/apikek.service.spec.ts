import { TestBed } from '@angular/core/testing';

import { ApikekService } from './apikek.service';

describe('ApikekService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApikekService = TestBed.get(ApikekService);
    expect(service).toBeTruthy();
  });
});
