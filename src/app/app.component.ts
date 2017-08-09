import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./mystyles.css']
})
export class AppComponent {
  counterEven:number[]=[];
  counterOdd:number[]=[];

  listenToCounter(counter:number){
    if(counter%2==0)
      this.counterEven.push(counter);
    else
    this.counterOdd.push(counter);
  }
  
}
