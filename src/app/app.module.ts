import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesListComponent } from './issues/issues-list.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, IssuesListComponent
  ],
  imports: [
    BrowserModule, AlertModule.forRoot(), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
