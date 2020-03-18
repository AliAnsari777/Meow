import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../model/user';
import { post } from '../model/post';
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
}
