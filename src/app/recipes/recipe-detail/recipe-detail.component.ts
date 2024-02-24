import { Component } from '@angular/core';
declare var Alpine: any; // Declare Alpine as any
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})

export class RecipeDetailComponent  {
  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
