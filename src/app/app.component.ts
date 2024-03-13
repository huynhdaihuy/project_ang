import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
        if (!isAuthenticated) {
          console.log('No authenticated');
          this.router.navigate(['login']);
        }
      });
    });
  }
}
