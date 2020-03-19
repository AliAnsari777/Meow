import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';


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

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
  signIn() {
    this.authService.login(this.loginForm.value).subscribe((data)=>{
      this.router.navigate(['../home/services']);
    });
    
  }
  createAccount() {
    this.router.navigate(['./register']);
  }
  resetPassword() {
    this.router.navigate(['./reset']);
  }
}
