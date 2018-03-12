import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {Injectable, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAuth from './store/auth.reducers';
import * as fromApp from '../store/app.reducers';

@Injectable()
export class PublicGuardService implements CanActivate, OnInit {
  authenticated: boolean;

  constructor(private store: Store<fromApp.AppState>, private router: Router){}

  ngOnInit() {
    this.store.select('auth').subscribe(
      (state: fromAuth.State) => {
        this.authenticated = state.authenticated;
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authenticated){
      this.router.navigate(['/']);
      return false;
    } else{
      return true;
    }
  }
}
