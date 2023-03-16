import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';

import { AuthorizationService } from './authorization.service';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let ngFireAuthSpy: jasmine.SpyObj<Auth>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Auth', ['']);
    TestBed.configureTestingModule({
      providers: [{ provide: Auth, useValue: spy }],
    });

    ngFireAuthSpy = TestBed.inject(Auth) as jasmine.SpyObj<Auth>;
    service = TestBed.inject(AuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
