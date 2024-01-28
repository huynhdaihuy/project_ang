import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const user = this.authService.getInforUser();
    if (
      !this.authService.isAuthenticated() ||
      !user.role.includes(expectedRole)
    ) {
      this.router.navigate(['login']);
      alert('You can be access in this route !');
      return false;
    }
    return true;
  }
}
