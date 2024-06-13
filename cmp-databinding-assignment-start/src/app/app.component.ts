import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: number[] = [];

  onCountEvent(number: number) {
    console.log(number);
    this.numbers.push(number);
  }

  onClearEvent() {
    console.log(this.numbers);
    console.log('clear numbers');
    this.numbers = [];
  }
}
