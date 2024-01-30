import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headersConfig = new HttpHeaders({
    'Content-Type': 'multipart/form-data',
  });
  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;
    if (this.jwtHelper.isTokenExpired(token)) {
      return this.handleAccessTokenExpired();
    }
    return true;
  }
  getInforUser(): any {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;
    return this.jwtHelper.decodeToken(token).user;
  }
  login(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/auth/signin', data);
  }
  signup(data: any): Observable<any> {
    data.user = 'try to fix bug';
    console.log('🚀 ~ AuthService ~ signup ~ data:', data);
    return this.http.post('http://localhost:3000/api/user', data);
  }
  logout(): void {
    localStorage.clear();
  }
  setInforLogin(data: any) {
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.user.refreshToken);
  }
  handleAccessTokenExpired(): boolean {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken || this.jwtHelper.isTokenExpired(refreshToken))
      return false;
    const user = this.getInforUser();
    return this.getNewAccessToken(user);
  }
  getNewAccessToken(user: any): boolean {
    this.http
      .post('http://localhost:3000/api/auth/get-access-token', user)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('accessToken', res.accessToken);
          return true;
        },
        error: (error) => {
          console.log(error);
          return false;
        },
      });
    return true;
  }
}
