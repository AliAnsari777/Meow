import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { post } from 'src/model/post';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts: post;

  constructor(private postService: PostService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getAllUserPosts()
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
        this.postService.deletePost(postID)
          .subscribe(data => {
            this.getAllPosts();
          });
    });
  }

  getAllResponders(postID) {
    console.log(postID);
    
    this.postService.getAllResponders(postID).subscribe(data => {
      console.log(data);
      
      //this.posts = data;
    });
  }
}
