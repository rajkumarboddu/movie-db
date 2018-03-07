import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import {NgForm} from '@angular/forms';

@Injectable()
export class AuthService {
  token: string;

  signupStatus = new Subject();
  signInStatus = new Subject();

  signupUser(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
      );
  }

  signinUser(form: NgForm, returnUrl: string): void {
    firebase.auth().signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(
        (response) => {
          console.log(response);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
                this.signInStatus.next({status: true, returnUrl: returnUrl});
              }
            )
        }
      )
      .catch(
        error => {
          console.log(error);
          if(error.code === "auth/wrong-password") {
            this.signInStatus.next({status: false, returnUrl: returnUrl});
          }
          form.reset();
        }
      );
  }

  getToken(): string {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

}
