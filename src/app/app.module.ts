import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PersonComponent} from './person/person.component';
import {PersonsComponent} from './persons/persons.component';
import {WarningComponent} from './Exercise-1/warning.component';
import {SuccessComponent} from './Exercise-1/success.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructAttrDirectivesComponent } from './struct-attr-directives/struct-attr-directives.component';
import { BindingExercisesComponent } from './binding-exercises/binding-exercises.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsComponent,
    WarningComponent,
    SuccessComponent,
    TwoWayBindingComponent,
    StructAttrDirectivesComponent,
    BindingExercisesComponent
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
