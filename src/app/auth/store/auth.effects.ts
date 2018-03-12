import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {fromPromise} from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import * as fromAuthActions from './auth.actions';
import {NgForm} from '@angular/forms';

@Injectable()
export class AuthEffects {
  signupStatus = new Subject();
  signInStatus = new Subject();
  returnUrl: string;

  constructor(private actions$: Actions) {}

  @Effect()
  signupEffect = this.actions$
    .ofType(fromAuthActions.TRY_SIGNUP)
    .map((action: fromAuthActions.TrySignup) => {
      return action.payload;
    })
    .switchMap((data: {email: string, password: string}) => {
      return fromPromise(
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
          .then(
            (response) => {
              this.signupStatus.next(true);
            }
          )
          .catch(
            error => {
              this.signupStatus.next(false);
              console.log(error)
            }
          )
      );
    })
    .map(() => {
      return {
        type: fromAuthActions.SIGNUP
      }
    });

  @Effect()
  signinEffect = this.actions$
    .ofType(fromAuthActions.TRY_SIGNIN)
    .map((action: fromAuthActions.TrySignin) => {
      return action.payload;
    })
    .switchMap((data: {form: NgForm, returnUrl: string}) => {
      this.returnUrl = data.returnUrl;
      return fromPromise(
        firebase.auth().signInWithEmailAndPassword(data.form.value.email, data.form.value.password)
          .then(
            (response) => {
              console.log(response);
              this.signInStatus.next({status: true, returnUrl: data.returnUrl});
            }
          )
          .catch(
            error => {
              console.log(error);
              if(error.code === "auth/wrong-password") {
                this.signInStatus.next({status: false, returnUrl: data.returnUrl});
              }
              data.form.reset();
            }
          )
      );
    })
    .switchMap(() => {
      return fromPromise(
        firebase.auth().currentUser.getIdToken()
      );
    })
    .mergeMap((token: string) => {
      console.log(token);
      this.signInStatus.next({status: true, returnUrl: this.returnUrl});
      return [
        {
          type: fromAuthActions.SIGNIN
        },
        {
          type: fromAuthActions.SET_TOKEN,
          payload: token
        }
      ];
    });
}
