import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
  
  email : new FormControl('', [
    Validators.required,
    Validators.email,
  ]),
  password : new FormControl('', [
    Validators.required
  ])
});




  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  signIn() {
    //call sign in service
  }
  createAccount() {
    this.router.navigate(['./register']);
  }
  resetPassword() {
    this.router.navigate(['./reset']);
  }
}
