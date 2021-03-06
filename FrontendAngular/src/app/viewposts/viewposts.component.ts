import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { post } from '../../model/post';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

interface PostType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {


  postType: PostType[] = [
    { value: 'found', viewValue: 'Found' },
    { value: 'lost', viewValue: 'Lost' },
    { value: 'adaption', viewValue: 'Adaption' },
    { value: 'sitting', viewValue: 'Sitting' }
  ];

  posts: post[];


  constructor(private dataService: PostService, private router: Router, private formBuilder: FormBuilder,
    private dialog: MatDialog, private userService: UserService) {


  }

  ngOnInit(): void {
    this.getAllPosts("adaption");
  }

  getAllPosts(selectedPostType) {
    console.log(selectedPostType);
    this.dataService.getAllPosts(selectedPostType.value)
      .subscribe(data => {
        this.posts = data;
      });
  }

  deletePost(postID) {

    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      width: '250px',
      // "data" is a interface that we injected in ts file of dialog box componet and it has three attributes
      data: { id: postID, title:"Delete Confirmation", message:"Do You Wanaa Delete Me? :(" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);

      if (result)
        this.dataService.deletePost(postID)
          .subscribe(data => {
            this.getAllPosts("adaption");
          });
    });
  }

  // first grab all information for user to send to specific post
  intrested(postID) {

    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      width: '250px',
      data: { id: postID, title:"Intrest Confirmation", message:"Are you intrested?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);
      if (result) {
        this.userService.receiveUserProfile().subscribe(result => {
          let intrest = { name: result.name, phone: result.phone, email: result.email };

          this.dataService.addIntrestedToPost(postID, intrest).subscribe(result => {
            console.log(result);
          });
        })
      }
    });
  }

}
