import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject , of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { user } from '../model/user';
import { post } from '../model/post';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = "http://localhost:3000/users";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'passFromLocalStorage'
    })
  };
  constructor(private http: HttpClient) { }

  createUser(user): Observable<user>{
    return this.http.post<user>(this.apiUrl+"/",JSON.stringify(user),this.httpOptions)
 }

}
