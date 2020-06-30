import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// we import this interface that has all the data that we need to use in our message dialog box
import { DialogData } from '../userpets/userpets.component';


@Component({
  selector: 'app-confirm-message-dialog',
  templateUrl: './confirm-message-dialog.component.html',
  styleUrls: ['./confirm-message-dialog.component.css']
})
export class ConfirmMessageDialogComponent implements OnInit {


  // in here we inject (DialogData) interface by using " @Inject(MAT_DIALOG_DATA)" so when ever we want to use our dialog box
  // we can use "data" and access anything is inside the (DialogData) interface.
  // we can put title and message that we want to show in message box so when we use it for different purpose we can set different
  // message and title for our message box.
  constructor(public dialogRef: MatDialogRef<ConfirmMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }


}
