/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoreApiService } from './storeApi.service';

describe('Service: StoreApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreApiService]
    });
  });

  it('should ...', inject([StoreApiService], (service: StoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
