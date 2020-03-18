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
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdatePrfileComponent } from './update-prfile/update-prfile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,
    children:[                            
    { path: 'services', component: ServicesComponent },
    { path: 'addPet', component:AddPetComponent},
    { path: 'posts', component: AddpostComponent },
    { path: 'addpost', component: AddpostComponent },
  { path: 'viewpost', component: ViewpostsComponent }, 
  { path: 'viewUserPosts', component: MyPostsComponent},
  { path: 'userpets', component: UserpetsComponent },
  { path: 'updateProfile', component:UpdatePrfileComponent}
     
  ]
},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: 'reset', component:ResetComponent},
  { path: '**', component:PagenotfoundComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
