import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthEffects } from '../store/auth.effects';
import * as fromAuthActions from '../store/auth.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpSuccess: boolean = false;
  signUpError: boolean = false;

  constructor(private authEffect: AuthEffects,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authEffect.signupStatus.subscribe(
      (result: boolean) => {
        this.signUpSuccess = result;
        this.signUpError = !result;
      }
    )
  }

  onSubmit(form: NgForm): void {
    this.store.dispatch(
      new fromAuthActions.TrySignup({
        email: form.value.email,
        password: form.value.password
      })
    );
    form.reset();
  }

}
