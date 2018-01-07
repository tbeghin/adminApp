import { TestBed, inject } from '@angular/core/testing';

import { OsmcService } from './osmc.service';

describe('OsmcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OsmcService]
    });
  });

  it('should be created', inject([OsmcService], (service: OsmcService) => {
    expect(service).toBeTruthy();
  }));
});
