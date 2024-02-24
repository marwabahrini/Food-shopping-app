import { Component } from '@angular/core';
import { Ingredients } from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
ingredients : Ingredients [] =[
  new Ingredients("tomatos",5),
  new Ingredients("potatos",10)
];

}


