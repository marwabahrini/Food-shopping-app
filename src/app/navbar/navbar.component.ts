import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //create property thats a new event emitter and we pass a string thats the feature thats wa sslected
  // in teh end and add () to extenciate this, create an object

  //to enable this event to be listened to  from outside of this component (from the app component = parent component )
  // Output allows to listen it from the parent component

@Output() featureSelected = new EventEmitter <string>;
  onSelect(feature:string){
    this.featureSelected.emit(feature);

// i want to use the property featureSelected which holds that event emitter as a
// value to emit an event whenever we click on one of the buttons, and it will emit feature , the string
 // we receive form the html on select

  }
}
