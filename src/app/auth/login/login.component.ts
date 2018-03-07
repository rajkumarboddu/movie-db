import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidPassword: boolean;
  returnUrl: string;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.authService.signInStatus
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
    this.authService.signinUser(form, this.returnUrl);
  }

}
