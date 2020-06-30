import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-intersted-details',
  templateUrl: './intersted-details.component.html',
  styleUrls: ['./intersted-details.component.css']
})
export class InterstedDetailsComponent implements OnInit {

  // displayedColumns: string[] = ['name', 'email', 'phone'];
  
  
  // dataSource = this.data.data;
  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    
  }

}
