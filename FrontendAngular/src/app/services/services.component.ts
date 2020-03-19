import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddpostComponent } from '../addpost/addpost.component';
import {Services} from '../../model/servicesEnum'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialog($event): void {


 const postType = this.getPostType($event.toElement.id);
   

console.log(postType);

    const dialogRef = this.dialog.open(AddpostComponent, {
      autoFocus: false,
      maxHeight: '550px',
      //width: '250px',
      data: {postType: postType}
    });

    dialogRef.afterClosed().subscribe(
       result => {
       console.log('The dialog was closed');
      //console.log(result);
      
    }
      );
  }

  getPostType(btnId){
    if(btnId == "bntSitting")
    return Services.bntSitting;
    if(btnId == "btnAbopt")
    return Services.btnAbopt;
    if(btnId == "btnFound")
    return  Services.btnFound;
    if(btnId == "btnLost")
    return  Services.btnLost;
  }

}
