import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmMessageDialogComponent } from '../confirm-message-dialog/confirm-message-dialog.component'

export interface DialogData {
  pet_ID: string;
}

@Component({
  selector: 'app-userpets',
  templateUrl: './userpets.component.html',
  styleUrls: ['./userpets.component.css']
})

export class UserpetsComponent implements OnInit {

  user: user;
  isDeleted: Boolean;

  constructor(private dataService: UserService, private router: Router, private dialog: MatDialog) {


  }
  ngOnInit(): void {
    this.getUserPets();

  }

  getUserPets(): any {
    this.dataService.getPetsFromUserEmail().subscribe((data => {
      this.user = data;
    }))
  }

  deletePet(petID): any {

    const dialogRef = this.dialog.open(ConfirmMessageDialogComponent, {
      width: '250px',
      data: { pet_ID: petID }
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




