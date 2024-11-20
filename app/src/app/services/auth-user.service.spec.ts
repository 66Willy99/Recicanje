import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthService } from './auth-user.service';

describe('AuthUserService', () => {
  let service: AuthService;
  let AuthMock: any;

  beforeEach(() => {

    AuthMock = jasmine.createSpyObj('AuthService', ['collection', 'createId']);
    AuthMock.createId.and.returnValue('mockedId');

    AuthMock.collection.and.returnValue({
      doc: jasmine.createSpy().and.returnValue({
        set: jasmine.createSpy().and.returnValue(Promise.resolve()),
        update: jasmine.createSpy().and.returnValue(Promise.resolve()),
        delete: jasmine.createSpy().and.returnValue(Promise.resolve())
      }),
      valueChanges: jasmine.createSpy().and.returnValue(of([]))
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
