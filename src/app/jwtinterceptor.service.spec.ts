import { TestBed, inject } from '@angular/core/testing';

import { JWTInterceptorService } from './jwtinterceptor.service';

describe('JWTInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JWTInterceptorService]
    });
  });

  it('should be created', inject([JWTInterceptorService], (service: JWTInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
