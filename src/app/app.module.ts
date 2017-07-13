import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PersonComponent} from './person/person.component';
import {PersonsComponent} from './persons/persons.component';
import {WarningComponent} from './Exercise-1/warning.component';
import {SuccessComponent} from './Exercise-1/success.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
