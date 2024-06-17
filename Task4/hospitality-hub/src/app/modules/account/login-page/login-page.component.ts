import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LoginRequest} from "../../../api-proxy/models/login-request";
import {AccountService} from "../../../core/services/account.service";
import { RegisterRequest } from 'src/app/api-proxy/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private readonly accountService: AccountService,
    private readonly toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    console.log('login page init')
    this.initForm();

  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage(field: string) {
    const control = this.loginForm.get(field);
    if (control && control.errors) {
      if (control.hasError('required')) {
        return 'You must enter a value';
      } else if (control.hasError('email')) {
        return 'Not a valid email';
      }
    }
    return '';
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginModel: LoginRequest = {email, password}

      this.accountService.login(loginModel)
        .subscribe({
          next: (response) => {
            if (response.accessToken !== null) {
              localStorage.setItem("access_token", response.accessToken ?? "");
              localStorage.setItem("refresh_token", response.refreshToken ?? "");
              localStorage.setItem("expires_in", response.expiresIn?.toString() ?? "");
              localStorage.setItem("login_time", new Date().toISOString());
              localStorage.setItem("user_email", email);
              window.location.reload();
            }
          },
          error: (error) => {
            console.log(error)
            this.toastr.error(error.statusText);
          }
        });

    }
  }

  register() {
    if(this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      const registerModel: RegisterRequest = {email, password}

      this.accountService.register(registerModel).subscribe({
        next: () => {
          this.toastr.success('User registered successfully');
        },
        error: () => {
          this.toastr.error('User registration failed');
        }
      });
    }

  }
}
