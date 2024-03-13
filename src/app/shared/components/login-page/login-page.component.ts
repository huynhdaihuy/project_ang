import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.loginForm.value);
    this.authService.signIn(this.loginForm.value).subscribe((res: any) => {
      this.router.navigate(['overview']);
      console.log('Login successfully');
    });
  }
}
