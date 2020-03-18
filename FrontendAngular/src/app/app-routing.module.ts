import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddpostComponent } from './addpost/addpost.component'
import { ViewpostsComponent } from './viewposts/viewposts.component'
import { UserpetsComponent } from './userpets/userpets.component'

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetComponent },

  //AYA
  { path: 'addpost', component: AddpostComponent },
  { path: 'viewpost', component: ViewpostsComponent },
  { path: 'addPet', component:AddPetComponent},
  { path: 'posts', component: AddpostComponent },
  { path: 'userpets', component: UserpetsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
