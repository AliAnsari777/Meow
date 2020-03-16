import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name : new FormControl('', [
      Validators.required
    ]),
    email : new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    phone : new FormControl('', [
      Validators.required
    ]),
    password : new FormControl('', [
      Validators.required
    ])
    
  });
  

  constructor(private dataService: DataService,private router:Router,private formBuilder: FormBuilder) {
   
   }

  
  ngOnInit(): void {
  }

  createAccount(){
  this.dataService.createUser(this.registerForm.value)
  .subscribe((data: {}) => {
    alert('User Created, Thanks');
    
  })
}
}
