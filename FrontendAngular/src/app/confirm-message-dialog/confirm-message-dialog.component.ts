import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  isDeleted: Boolean;
}

@Component({
  selector: 'app-confirm-message-dialog',
  templateUrl: './confirm-message-dialog.component.html',
  styleUrls: ['./confirm-message-dialog.component.css']
})
export class ConfirmMessageDialogComponent implements OnInit {
  
  isDeleted = true;
  constructor(public dialogRef: MatDialogRef<ConfirmMessageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
   
   }

  onNoClick(): void {
    this.dialogRef.close();
  }
  

  ngOnInit(): void {

  }

}
