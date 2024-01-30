import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  // signUpForm: FormGroup;
  image:  any;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {
    // this.signUpForm = this.fb.group({
    //   image: [null, Validators.required],
    // });
  }

  ngOnInit(): void {}
  onSignUp() {
    this.authService.signup({ image: this.image }).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  handleChangeFile(e: any) {
    console.log(e.target.files[0]);
    this.image = e.target.files[0];
  }
}
