import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpSuccess: boolean = false;
  signUpError: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signupSuccess.subscribe(
      (result: boolean) => {
        this.signUpSuccess = result;
        this.signUpError = !result;
      }
    )
  }

  onSubmit(form: NgForm): void {
    this.authService.signupUser(form.controls.email.value, form.controls.password.value);
    form.reset();
  }

}
