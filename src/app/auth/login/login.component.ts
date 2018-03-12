import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../store/app.reducers';
import {AuthEffects} from '../store/auth.effects';
import * as fromAuthActions from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidPassword: boolean;
  returnUrl: string;

  constructor(private authEffects: AuthEffects,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.authEffects.signInStatus
      .subscribe(
        (status: {status: boolean, returnUrl?: string}) => {
          if(status.status) {
            this.router.navigateByUrl(status.returnUrl);
          } else{
            this.invalidPassword = true;
          }
        }
      );
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.returnUrl = params['return'] || '/';
        }
      )
  }

  onSubmit(form: NgForm) {
    const returnUrl = this.returnUrl;
    this.store.dispatch(new fromAuthActions.TrySignin({form, returnUrl}));
  }

}
