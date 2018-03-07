import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidPassword: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.signInStatus
      .subscribe(
        (status: {status: boolean, msg?: string}) => {
          if(status.status) {
            this.router.navigate(['/']);
          } else{
            this.invalidPassword = true;
          }
        }
      )
  }

  onSubmit(form: NgForm) {
    this.authService.signinUser(form);
  }

}
