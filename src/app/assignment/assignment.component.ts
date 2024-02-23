import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.css'
})
export class AssignmentComponent {
  quoteDisplay = false;
  quoteName ="citation"
  quotes =[''];

  displayQuote() {
    this.quoteDisplay = true;
    this.quotes.push(this.quoteName + this.quotes.length)
  }

}
