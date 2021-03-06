import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


import {MatDatepickerModule} from '@angular/material/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesComponent } from './services/services.component';
import { ResetComponent } from './reset/reset.component';

import { HttpClientModule } from '@angular/common/http';

import { AddPetComponent } from './add-pet/add-pet.component'; 
import { MyPostsComponent } from './my-posts/my-posts.component'; 
import { AddpostComponent } from './addpost/addpost.component';

import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ViewpostsComponent } from './viewposts/viewposts.component';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { authInterceptorProviders } from '../services/http-token-interceptor.service';

import { UserpetsComponent } from './userpets/userpets.component';
import { ConfirmMessageDialogComponent } from './confirm-message-dialog/confirm-message-dialog.component';
import { UpdatePrfileComponent } from './update-prfile/update-prfile.component';
import { InterstedDetailsComponent } from './intersted-details/intersted-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ResetComponent,
    AddPetComponent,
    MyPostsComponent,
    AddpostComponent,
    ViewpostsComponent,
    HomeComponent,
    PagenotfoundComponent,
    UserpetsComponent,
    ConfirmMessageDialogComponent,
    UpdatePrfileComponent,
    InterstedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    //FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
