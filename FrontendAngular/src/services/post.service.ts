import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject , of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { post } from '../model/post';
import { jwtResponse } from  '../model/jwtResponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = "http://localhost:3000/posts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      //'Authorization': 'passFromLocalStorage'
    })
  };
  constructor(private http: HttpClient) { }

  getPostsByEmail(email){
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl+"/"+email,{headers});
  }
}
