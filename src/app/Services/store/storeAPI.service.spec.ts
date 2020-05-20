/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreAPIService } from './storeAPI.service';

describe('Service: StoreAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreAPIService]
    });
  });

  it('should ...', inject([StoreAPIService], (service: StoreAPIService) => {
    expect(service).toBeTruthy();
  }));
});
