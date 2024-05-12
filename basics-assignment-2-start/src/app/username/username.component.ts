import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css',
})
export class UsernameComponent {
  username = '';

  isUsernameEmpty() {
    return !this.username || this.username.length === 0;
  }

  resetUsername() {
    this.username = '';
  }
}
