import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { catchError, map, Observable, of } from 'rxjs';
import LoginResponse from '../../../account/interfaces/LoginResponse';
import UserState from '../../../account/interfaces/UserState';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly KEY = 'isLoggedIn';
  private readonly KEY2 = 'UserIdentity';
  private readonly endpoint = `${environment.springURL}/auth/login`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<LoginResponse>(this.endpoint, { email, password })
      .pipe(
        map((response) => {
          if (response.success) {
            // Guardamos la info de login y usuario
            localStorage.setItem(this.KEY, 'true');
            localStorage.setItem(this.KEY2, JSON.stringify(response.data));
            return true;
          } else {
            return false;
          }
        }),
        catchError(() => {
          // En caso de error HTTP
          return of(false);
        })
      );
  }

  register(
    email: string,
    password: string,
    username: string
  ): Observable<boolean> {
    return this.http
      .post<LoginResponse>(`${environment.springURL}/auth/register`, {
        username: username,
        email: email,
        password: password,
      })
      .pipe(
        map((res) => {
          if (res.success) {
            console.log(res);

            return true;
          } else {
            console.log(res);

            return false;
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.KEY);
    localStorage.removeItem(this.KEY2);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.KEY) === 'true';
  }

  getUserIdentity(): UserState | null {
    const user = localStorage.getItem(this.KEY2);
    return user ? JSON.parse(user) : null;
  }
}
