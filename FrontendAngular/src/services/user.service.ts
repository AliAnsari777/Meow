import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../model/user';
import { pet } from '../model/pet';
import { profile } from '../model/profile';
import { EmailValidator } from '@angular/forms';

 
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
  constructor(private http: HttpClient) { 
   
  }

  // retrive email from local storage
  email = "ansari@mum.edu";

  createUser(user): Observable<user> {
    return this.http.post<user>(this.apiUrl + "/", JSON.stringify(user), this.httpOptions)
  }

<<<<<<< HEAD
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
=======
 addPet(pet): Observable<pet>{
   console.log("2.this is service " + pet.name);
   
   return this.http.post<pet>(this.apiUrl+"/addPet/0/" + this.email, pet);
 }

 receiveUserProfile(email): Observable<user>{
  return this.http.get<user>(this.apiUrl+ "/findProfile/" + email)
 }

 updateProfile(user): Observable<user>{
  //  console.log("2.this is service " + user.name);
  for (var pair of user.entries()) {
    console.log(pair[0]+ ' - ' + pair[1]); 
  }  
   return this.http.post<user>(this.apiUrl + "/editProfile/" + this.email,JSON.stringify(user),this.httpOptions);
 }
>>>>>>> a77bd521a0b3fd8f2dd1b2769a7dc69f93b1c140
}
