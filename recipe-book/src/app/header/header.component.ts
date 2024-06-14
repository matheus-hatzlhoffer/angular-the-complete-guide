import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output('clickedSection') clickedSection = new EventEmitter<string>();

  onRecipesSelected() {
    this.clickedSection.emit('recipes');
  }

  onShoppingListSelected() {
    this.clickedSection.emit('shoppingList');
  }
}
