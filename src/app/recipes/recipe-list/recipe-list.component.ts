import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is desc',
      'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d'),
    new Recipe('Another Test Recipe', 'This is desc',
      'https://c.pxhere.com/photos/50/03/beirut_power_supply_snack-1375814.jpg!d')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
