import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {PublicGuardService} from './public-guard.service';
import {LoginComponent} from './login/login.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent, canActivate: [PublicGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [PublicGuardService] }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
