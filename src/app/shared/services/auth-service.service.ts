import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject;
  isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient) {
    const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(isAuthenticated);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  private setAuthStatusInLocalStorage(isAuthenticated: boolean): void {
    if (!isAuthenticated) {
      localStorage.removeItem('isAuthenticated');
      return;
    }
    localStorage.setItem('isAuthenticated', 'true');
  }

  signIn(credentials: { username: string; password: string }): Observable<any> {
    return this.http
      .post<any>('http://localhost:3000/api/auth/signin', credentials)
      .pipe(
        tap((res: any) => {
          console.log(res);
          this.isAuthenticatedSubject.next(true);
          this.setAuthStatusInLocalStorage(true);
        }),
        catchError((error) => {
          console.error('Error logging in:', error);
          return throwError(() => new Error(error));
        })
      );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.setAuthStatusInLocalStorage(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
