import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { post } from '../../model/post';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {
  posts: post;

  constructor(private dataService: PostService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getAllPosts("")
      .subscribe(data => {
        this.posts = data;
      });
  }

  backtoLogin() {

  }
  deletePost(postID) {
    this.dataService.deletePost(postID)
      .subscribe(data => {
        this.getAllPosts();
      });

  }

}
