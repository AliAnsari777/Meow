import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  //   children: [
  //     { path: 'register', component: RegisterComponent },
  //     { path: 'services', component: ServicesComponent },
      
  //     {path:'reset',component:ResetComponent}
  //   ]
  // },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
