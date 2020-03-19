import { Injectable } from '@angular/core';
import { Observable, of, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from '../model/user';
import { pet } from '../model/pet';
import { profile } from '../model/profile';
import { EmailValidator } from '@angular/forms';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = "http://localhost:3000/users";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient,private authService:AuthService) {

  }

  // retrive email from local storage
  email = this.authService.authEmail();

  createUser(user): Observable<user> {
    return this.http.post<user>(this.apiUrl + "/", JSON.stringify(user), this.httpOptions)
  }

 addPet(pet): Observable<pet>{   
   return this.http.post<pet>(this.apiUrl+"/addPet/0/" + this.email, pet);
 }

 receiveUserProfile(): Observable<user>{
  return this.http.get<user>(this.apiUrl+ "/findProfile/" + this.email)
 }

 updateProfile(user): Observable<profile>{
   return this.http.put<profile>(this.apiUrl + "/editProfile/1/" + this.email, user);
 }


  //AYA
  getPetsFromUserEmail() {
    const headers = this.httpOptions.headers;
    return this.http.get<user>(this.apiUrl + "/userpets" + this.email, { headers });
  }

  deletePet(petID) {
    const headers = this.httpOptions.headers;
    return this.http.delete(this.apiUrl + "/userpets/" + petID, { headers });

  }

}
