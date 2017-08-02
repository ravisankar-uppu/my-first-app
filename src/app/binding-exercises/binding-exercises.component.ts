import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-exercises',
  templateUrl: './binding-exercises.component.html',
  styleUrls: ['./binding-exercises.component.css']
})
export class BindingExercisesComponent implements OnInit {

  showParagraph : boolean=false;
  clicks =[];
  counter : number=0;

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetailsClick(){
    this.clicks.push(Date.now().toString());
    this.counter=this.counter+1;
    if(this.showParagraph){
      this.showParagraph=false;
    }
    else{
      this.showParagraph=true;
    }
  } 

  getColor(){
    if(this.counter>=5){
      return 'green';
    }
    else{
      return 'transparent';
    }
    
  } 


}
