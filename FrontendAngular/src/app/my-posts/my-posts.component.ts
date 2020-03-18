import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { post } from 'src/model/post';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllUserPosts("alex@mum.edu")
      .subscribe(data => {
        this.posts = data;
      });
  }

  deletePost(postID) {
    this.postService.deletePost(postID)
      .subscribe(data => {
        this.getAllPosts();
      });
  }

  backtoLogin() {}

}
