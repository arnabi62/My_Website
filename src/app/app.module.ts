import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
//import {MatButton} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';

import { IntroComponent } from './intro/intro.component';
import { MiddleComponent } from './middle/middle.component';
import { EndCardsComponent } from './end-cards/end-cards.component';



@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    HomeComponent,
    ProjectComponent,

    IntroComponent,
    MiddleComponent,
    EndCardsComponent

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
