import { TestBed, inject } from '@angular/core/testing';

import { OsmcService } from './osmc.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('OsmcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [OsmcService]
    });
  });

  it('should be created', inject([OsmcService], (service: OsmcService) => {
    expect(service).toBeTruthy();
  }));
});
