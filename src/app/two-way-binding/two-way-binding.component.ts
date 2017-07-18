import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  
    enableReset:boolean=false;
    userName:string="";

  constructor() { }

  ngOnInit() {
  }

   resetUserName(){
        this.userName="";        
        this.enableReset=false;
    }

    onUpdateUserName(event: Event){
        this.userName=(<HTMLInputElement>event.target).value;
        if(this.userName.length>0)
            this.enableReset=true;
        else
            this.enableReset=false;
    }

}
