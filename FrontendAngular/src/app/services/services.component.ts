import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddpostComponent } from '../addpost/addpost.component';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddpostComponent, {
      autoFocus: false,
   
      maxHeight: '550px'
      //width: '250px',
      //data: {name: this.name, animal: this.animal}
    });

    // dialogRef.afterClosed().subscribe(
    //    result => {
    //    console.log('The dialog was closed');
    //    this.animal = result; 
    // }
    //   );
  }

}
