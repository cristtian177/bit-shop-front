import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component';
import { SignupComponent } from './routes/signup/signup.component';
import { AdminComponent } from './routes/admin/admin.component';
import { Page404Component } from './routes/page404/page404.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule} from '@angular/common/http' 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    Page404Component,
    CardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // permite consumir apis con el cliente http de angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
