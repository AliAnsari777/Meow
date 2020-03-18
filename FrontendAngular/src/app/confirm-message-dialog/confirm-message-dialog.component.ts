import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../userpets/userpets.component';


@Component({
  selector: 'app-confirm-message-dialog',
  templateUrl: './confirm-message-dialog.component.html',
  styleUrls: ['./confirm-message-dialog.component.css']
})
export class ConfirmMessageDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ConfirmMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
