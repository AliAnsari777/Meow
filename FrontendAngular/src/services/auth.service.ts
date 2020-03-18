import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject , of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { user } from '../model/user';
import { jwtResponse } from  '../model/jwtResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:3000/users";
  
  authSubject  =  new  BehaviorSubject(false);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  login(user){
    const headers = this.httpOptions.headers;
    return this.http.post<jwtResponse>(this.apiUrl+"/login/",user,{headers}).pipe(
      tap((res:  jwtResponse ) => {
        if (res) {
          localStorage.setItem("ACCESS_TOKEN", res.token);
          localStorage.setItem("EXPIRES_IN", res.expiresIn);
          this.authSubject.next(true);
        }
      }));
  }
  signOut() {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    this.authSubject.next(false);
  }
  isAuthenticated() {
    const token = localStorage.getItem("ACCESS_TOKEN");
    return token;
}

}
