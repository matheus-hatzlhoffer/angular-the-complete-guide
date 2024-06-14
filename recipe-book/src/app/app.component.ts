import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-book';
  viewRecipe = false;
  viewShoppingList = true;

  toggleView(viewSelected: string) {
    if (viewSelected === 'recipes') {
      this.viewRecipe = true;
      this.viewShoppingList = false;
    } else {
      this.viewRecipe = false;
      this.viewShoppingList = true;
    }
  }
}
