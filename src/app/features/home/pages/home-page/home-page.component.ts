import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  // openSignupDialog(): void {
  //   const dialogRef = this.dialog.open(SignupDialogComponent, {
  //     width: '300px',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //   });
  // }
  logout() {
    this.authService.logout();
    this.route.navigate(['/login']);
    alert('You had already log out');
  }
}
