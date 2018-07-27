import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userEvents = new BehaviorSubject<UserModel>(undefined);
user : UserModel;

  constructor(private http: HttpClient) {
    this.retrieveUser();
  }

  register(login: string, password: string, birthYear: number): Observable<any> {
    const body = { login, password, birthYear };
    return this.http.post('http://ponyracer.ninja-squad.com/api/users', body);
  }

  authenticate(credentials:{login: string; password: string}): Observable<UserModel> {
    return this.http.post<UserModel>('http://ponyracer.ninja-squad.com/api/users/authentication', credentials).pipe(
   tap((user: UserModel) => this.userEvents.next(user)),
   tap((user: UserModel) => this.storeLoggedInUser(user))
    );
  }

  storeLoggedInUser(user: UserModel){
    this.userEvents.next(user);
    window.localStorage.setItem("rememberMe", JSON.stringify(user));
  }

  retrieveUser(){
    this.user = JSON.parse(window.localStorage.getItem("rememberMe"));
    this.userEvents.next(this.user);
  }
}
