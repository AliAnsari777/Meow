import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import {MatSnackBar,MatSnackBarConfig,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface PostType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  postType: PostType[] = [
    { value: 'found', viewValue: 'Found' },
    { value: 'lost', viewValue: 'Lost' },
    { value: 'adaption', viewValue: 'Adaption' },
    { value: 'sitting', viewValue: 'Sitting' }
  ];
  
  message: string = 'post added successfully.';
  actionButtonLabel: string = 'ok';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 5000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  
  addExtraClass: boolean = false;

  constructor(private dataService: PostService, private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {

  }


  addPostForm = new FormGroup({
    text: new FormControl('', [
      Validators.required
    ]),
    date: new FormControl('', [
      Validators.required,
    ]),
    startSittingDate: new FormControl('', [
      Validators.required
    ]),
    endSittingDate: new FormControl('', [
      Validators.required
    ]),
    postType: new FormControl('', [
      Validators.required
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl('', [
      
    ]),
    //address
    state: new FormControl('', [
      Validators.required
    ]),
    city: new FormControl('', [
      Validators.required
    ]),
    zipCode: new FormControl('', [
      Validators.required
    ]),
    status: new FormControl('true', [
      Validators.required
    ]),
    petName: new FormControl('', [
      
    ])
  })

  ngOnInit(): void {
  }

  addNewPost() {
    this.dataService.addPost(this.addPostForm.value)
      .subscribe((data: {}) => {
        console.log(data);
        this.openSnackBar();
        //this.router.navigateByUrl('login');
      })
  }

  openSnackBar() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    this._snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined,config);
  }
}