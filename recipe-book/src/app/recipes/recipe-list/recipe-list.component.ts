import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Delicious Recipe',
      'A recipe that is delicious',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272',
      [
        new Ingredient('banana', 3),
        new Ingredient('Leite condensado', 0.5),
        new Ingredient('Aveia', 0.1),
      ]
    ),
    new Recipe(
      'Second Delicious Recipe',
      'Another recipe that is delicious',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'
    ),
  ];

  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  onRecipeClicked(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
