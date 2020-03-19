import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { post } from '../../model/post';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {
  posts: post;

  constructor(private dataService: PostService, private router: Router, private formBuilder: FormBuilder, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.dataService.getAllPosts("adaption")
      .subscribe(data => {
        this.posts = data;
      });
  }

  deletePost(postID) {

    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      width: '250px',
      data: { pet_ID: postID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);

      if (result)
        this.dataService.deletePost(postID)
          .subscribe(data => {
            this.getAllPosts();
          });
    });
  }
}
