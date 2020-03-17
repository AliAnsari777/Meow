import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject , of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { user } from '../model/user';
import { post } from '../model/post';
import { pet } from '../model/pet';


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

 addPet(pet): Observable<pet>{
   // retrive email from local storage
   let email = "/aya@gmail.com"
   return this.http.post<pet>(this.apiUrl+"/addPet/0" + email, pet)
 }
}
