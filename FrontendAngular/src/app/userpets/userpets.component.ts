import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'
import { AddPetComponent } from '../add-pet/add-pet.component';

export interface DialogData {
  id: string;
  title: string;
  message: string;
}

@Component({
  selector: 'app-userpets',
  templateUrl: './userpets.component.html',
  styleUrls: ['./userpets.component.css']
})

export class UserpetsComponent implements OnInit {

  user: user;

  constructor(private dataService: UserService, private router: Router, private dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.getUserPets();

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPetComponent, {
      autoFocus: false,
   
      maxHeight: '550px'
      //width: '250px',
      //data: {name: this.name, animal: this.animal}
    });
  }
  getUserPets(): any {
    this.dataService.getPetsFromUserEmail().subscribe((data => {
      console.log(data);
      
if(data != null)
      this.user = data;
      else
      this.user = new user();
      

      console.log(this.user);
      
    }))
  }

  deletePet(petID): any {

    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      width: '250px',
      data: { id: petID, title:"Delete Confirmation", message:"Do You Wanaa Delete Me? :(" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);

      if (result)
        this.dataService.deletePet(result).subscribe(res => {
          this.getUserPets();//render list
        });
    });
  }

}




