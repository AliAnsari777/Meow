import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  {path:'reset',component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }