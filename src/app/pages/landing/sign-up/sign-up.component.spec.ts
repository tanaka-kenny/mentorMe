import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { AuthorizationService } from 'src/app/services/authorization.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let authorizationServiceSpy: jasmine.SpyObj<AuthorizationService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('AuthorizationService', [
      'registerWithEmailAndPassword',
      'loginWithGoogle',
      'loginWithFacebook',
    ]);

    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: AuthorizationService, useValue: spy }],
    });

    authorizationServiceSpy = TestBed.inject( AuthorizationService ) as jasmine.SpyObj<AuthorizationService>;
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#signInWithGoogle', () => {
    it('should call loginWithGoogle when I click the google icon', () => {
      const button = fixture.debugElement.query(By.css('.google-icon'));

      button.triggerEventHandler('click');

      expect(authorizationServiceSpy.loginWithGoogle).toHaveBeenCalled();
    });
  });

  describe('#signInWithFacebook', () => {
    it('should call loginWithFacebook when I click the facebook icon', () => {
      const button = fixture.debugElement.query(By.css('.facebook-icon'));

      button.triggerEventHandler('click');

      expect(authorizationServiceSpy.loginWithFacebook).toHaveBeenCalled();
    });
  });

  describe('#createUserWithEmailAndPassword', () => {
    it('should call login registerWithEmailAndPassword I click the sign-up button', () => {
      const button = fixture.debugElement.query(By.css('.sign-in-with-password'));
      const email = component.email;
      const password = component.password;

      button.triggerEventHandler('click');

      expect(authorizationServiceSpy.registerWithEmailAndPassword)
        .toHaveBeenCalledWith(email, password);
    });
  });
});
