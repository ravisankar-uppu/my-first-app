import {Component} from '@angular/core';

@Component({
    selector:'person-component',
    templateUrl:'./person.component.html'
})

export class PersonComponent{
    firstName:string="Ravi";
    lastName:string="Uppu";
    address:string="Germantown";
    email:string="ravisankar426@gmail.com";
    phone:string="316-435-3610";
    createServer:boolean=false;
    serverCreated:string="";
    serverName:string="";

    constructor(){
        // setTimeout(()=>{
        //     this.createServer=true;
        // },2000);
    }

    onCreateServer(){
        this.serverCreated="The server has been created";
    }

    onUpdateServer(event: Event){
        this.serverName=(<HTMLInputElement>event.target).value;
        if(this.serverName.length>0)
            this.createServer=true;
        else
            this.createServer=false;            
    }
}