import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { user } from '../module/user';
import { post } from '../module/post';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiUrl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'passFromLocalStorage'
    })
  };
  constructor(private http: HttpClient) { }

  createUser(user): Observable<user>{
    return this.http.post<user>(this.apiUrl+"/users",JSON.stringify(user),this.httpOptions);
 }
  getPostsByEmail(email){
    const headers = this.httpOptions.headers;
    return this.http.get<user>(this.apiUrl+"/posts/"+email,{headers});
  }


}
