import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import {
  decrement,
  increment,
  resetCounter,
} from 'src/app/store/counter.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  counter$: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private store: Store<{ counter: number }>
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.counter$ = this.store.select('counter');
  }
  ngOnInit(): void {}

  onLogin(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.authService.setInforLogin(res);
        this.route.navigate(['/home']);
      },
    });
  }
  onCancel(): void {}
  handleDecrement() {
    this.store.dispatch(decrement());
  }
  handleIncrement() {
    this.store.dispatch(increment());
  }
  handleResetCounter() {
    this.store.dispatch(resetCounter());
  }
}
