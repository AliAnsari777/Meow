import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../model/user';
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

  createUser(user): Observable<user> {
    return this.http.post<user>(this.apiUrl + "/", JSON.stringify(user), this.httpOptions)
  }

  addPet(pet): Observable<pet> {
    // retrive email from local storage
    let email = "/aya@gmail.com"
    return this.http.post<pet>(this.apiUrl + "/addPet/0" + email, pet)
  }

  getPetsFromUserEmail() {
    let email = "/mohammadhanif@mum.edu";
    const headers = this.httpOptions.headers;
    return this.http.get<user>(this.apiUrl + "/userpets" + email, { headers });
  }

  deletePet(petID) {
    const headers = this.httpOptions.headers;
    return this.http.delete(this.apiUrl + "/userpets/" + petID, { headers });

  }
}
