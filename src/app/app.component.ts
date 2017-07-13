import { Component } from '@angular/core';
import {PersonComponent} from './person/person.component'
import {WarningComponent} from './Exercise-1/warning.component'
import {SuccessComponent} from './Exercise-1/success.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name ='';
}
