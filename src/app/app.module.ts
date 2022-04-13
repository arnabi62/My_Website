import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
//import {MatButton} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    HomeComponent,
    ProjectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
   // MatButton
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
