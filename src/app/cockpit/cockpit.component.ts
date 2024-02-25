import {Component, EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
 @Output('srCreated') serverCreated = new EventEmitter<{serverName:string, serverContent:string}>();
 @Output('bpCreated') blueprintCreated  = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerContent = '';


  // Access the value of the input using the ViewChild for content and Local references html for name
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({serverName:nameInput.value, serverContent:this.newServerContent});
  }

  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({serverName:nameInput.value, serverContent:this.newServerContent});
  }


}
