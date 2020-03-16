import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';


import { Observable } from "rxjs";

import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


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

  // registerForm: FormGroup;

  // nameFormControl = new FormControl('', [
  //   Validators.required
  // ]);
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // phoneFormControl = new FormControl('', [
  //   Validators.required
  // ]);
  // passwordFormControl = new FormControl('', [
  //   Validators.required
  // ]);
  
  matcher = new MyErrorStateMatcher();

  constructor(private dataService: DataService,public router:Router,private formBuilder: FormBuilder) {
   
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
