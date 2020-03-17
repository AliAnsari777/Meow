import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from '../model/post';

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

  //get spacific post by emil
  getPostsByEmail(email) {
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl + "/" + email, { headers });
  }

  // get all posts
  getAllPosts(postType) {
    postType = "adaption";
    const headers = this.httpOptions.headers;
    return this.http.get<post>(this.apiUrl + "/" + postType, { headers });
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
}
