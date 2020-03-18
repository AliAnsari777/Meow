import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }
logOut(){
  this.authService.signOut();
  this.router.navigate(['./login']);
}
}
