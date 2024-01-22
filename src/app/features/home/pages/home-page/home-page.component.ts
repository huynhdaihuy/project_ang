import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
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
}
