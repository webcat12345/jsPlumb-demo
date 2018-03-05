import { TestBed, inject } from '@angular/core/testing';

import { ElementDataService } from './element-data.service';

describe('ElementDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementDataService]
    });
  });

  it('should be created', inject([ElementDataService], (service: ElementDataService) => {
    expect(service).toBeTruthy();
  }));
});
