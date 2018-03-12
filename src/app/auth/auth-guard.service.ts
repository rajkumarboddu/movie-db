import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

import * as fromAuth from './store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class AuthGuardService implements CanActivate{
  authenticated: boolean;

  constructor(private store: Store<fromApp.AppState>, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.select('auth').subscribe(
      (state: fromAuth.State) => {
        this.authenticated = state.authenticated;
      }
    );
    if(this.authenticated) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
