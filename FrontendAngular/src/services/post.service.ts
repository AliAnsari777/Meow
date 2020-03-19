import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from '../model/post';
import { AuthService } from './auth.service';

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
  constructor(private http: HttpClient,private authService:AuthService) { }

  //get spacific post by emil
  getPostsByEmail(email) {
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl + "/" + email, { headers });
  }

  // get all posts
  getAllPosts(postType) {
  
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl + "/" + postType, { headers });
  }


  // get all post for specific user by using email
  getAllUserPosts() {
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl + "/userposts/" + this.authService.authEmail(), { headers });
  }


  // delete a spacific post
  deletePost(postId) {
    console.log(this.apiUrl + "/" + postId);
    
    console.log("delete post in service layer")
    const headers = this.httpOptions.headers;
    return this.http.delete(this.apiUrl + "/" + postId, { headers });
  }

  //app new post 
  addPost(post) {
    return this.http.post<post>(this.apiUrl + "/", JSON.stringify(post), this.httpOptions)
  }

  //find user information who is intrested in a post to save in responders part of each post
  addIntrestedToPost(postID, intrested){
    console.log("2. this is service ");
    console.log(intrested);
    
    return this.http.post<any>(this.apiUrl + "/" + postID,JSON.stringify(intrested), this.httpOptions);
  }
}
