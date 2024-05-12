import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  toogle = false;
  logs: {
    toogleId: number;
    timestamp: String;
    action: 'toggle on' | 'toogle off';
  }[] = [];

  toogleSecret() {
    this.toogle = !this.toogle;
    this.logs.push({
      toogleId: this.logs.length,
      timestamp: this.getDate(),
      action: this.toogle ? 'toggle on' : 'toogle off',
    });
  }

  getDate() {
    let date = new Date();
    const offset = date.getTimezoneOffset();
    date = new Date(date.getTime() - offset * 60 * 1000);
    return date.toISOString().split('T')[0];
  }

  getBgColor(i: number) {
    if (i > 4) {
      return 'blue';
    }
    return 'transparent';
  }
}
