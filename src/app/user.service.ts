import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user.model';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { JWTInterceptorService } from './jwtinterceptor.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userEvents = new BehaviorSubject<UserModel>(undefined);
user: UserModel;

  constructor(private http: HttpClient, private jwtInterceptor: JWTInterceptorService) {
    this.retrieveUser();
  }

  register(login: string, password: string, birthYear: number): Observable<UserModel> {
    const body = { login, password, birthYear };
    return this.http.post<UserModel>(`${environment.baseUrl}/api/users`, body);
  }

  authenticate(credentials: { login: string; password: string }): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.baseUrl}/api/users/authentication`, credentials).pipe(
   tap((user: UserModel) => this.storeLoggedInUser(user))
    );
  }

  storeLoggedInUser(user: UserModel) {
    window.localStorage.setItem('rememberMe', JSON.stringify(user));
    this.jwtInterceptor.setJwtToken(user.token);
    this.userEvents.next(user);
  }

  retrieveUser() {
    const value = window.localStorage.getItem('rememberMe');
    if (value) {
      const user = JSON.parse(value);
      this.jwtInterceptor.setJwtToken(user.token);
      this.userEvents.next(user);
    } else {
      this.user = null;
    }
  }

  logout() {
    this.userEvents.next(null);
    localStorage.removeItem('rememberMe');
    this.jwtInterceptor.removeJwtToken();
  }
}
