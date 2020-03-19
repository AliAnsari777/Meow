import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { post } from 'src/model/post';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { InterstedDetailsComponent } from '../intersted-details/intersted-details.component';


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

  async getAllResponders($event) {
    const postId = $event.toElement.id;
    console.log(postId);
    
    await this.postService.getAllResponders(postId).subscribe(data => {
      console.log(data);
      
      const dialogRef = this.dialog.open(InterstedDetailsComponent, {
        autoFocus: false,
        maxHeight: '550px',
        //width: '250px',
        data: data
      });
      
     
      
      dialogRef.afterClosed().subscribe(
         result => {
         console.log('The dialog was closed');

      }
        );
    });
  }

  openDialog($event): void {

   
      
     }
}
