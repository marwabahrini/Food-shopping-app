import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aserver',
  templateUrl: './aserver.component.html',
  styleUrl: './aserver.component.css'
})
export class AserverComponent implements OnInit{
@Input('srvElement') element: {type:string, name:string, content:string} = { type: '', name: '', content: '' }; //typescript syntax to define a type

  constructor() {}
  ngOnInit() {

  }
}
