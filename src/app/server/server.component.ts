import {Component} from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles : [' .online { color : white; }']
})

export class serverComponent {
    age = 10;
   allowNewServer = false;
   noteCreationMessage = "no note was created";
   NoteName = "marwa";
   noteCreated = false;
   notes = [''];

    getColor() {
        return this.noteCreationMessage === 'no note was created' ? 'red' : 'green';
    }

    onCreateNote() {
       this.noteCreated = true;
       this.noteCreationMessage = "new note is created ";
       this.notes.push(this.NoteName);
   }
}

