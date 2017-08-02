import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-attr-directives',
  templateUrl: './struct-attr-directives.component.html',
  styleUrls: ['./struct-attr-directives.component.css']
})
export class StructAttrDirectivesComponent implements OnInit {
  
    createServer:boolean=false;
    serverCreated:string="There is no server created...!!!";
    serverName:string="";
    isServerCreated:boolean=false;

  constructor() { }

  ngOnInit() {
  }
    

    onCreateServer(){
        this.serverCreated="The server has been created with the name - "+this.serverName;
        this.isServerCreated=true;
    }

    onUpdateServer(event: Event){
        this.serverName=(<HTMLInputElement>event.target).value;

        if(this.serverName.length>0){
            this.createServer=true;
        }
        else{
            this.createServer=false; 
            this.serverCreated="There is no server created...!!!"; 
            this.isServerCreated=false;     
        }     
    }

}
