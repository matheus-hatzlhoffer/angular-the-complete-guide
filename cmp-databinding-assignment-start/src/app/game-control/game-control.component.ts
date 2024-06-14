import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  count = 0;
  intervalCount: NodeJS.Timeout;
  @Output('count') countEvent = new EventEmitter<number>();
  @Output('clear') clearCountEvent = new EventEmitter();

  startGame() {
    if (this.intervalCount === undefined) {
      this.intervalCount = setInterval(this.emitEvent, 1000);
    }
  }

  stopGame() {
    clearInterval(this.intervalCount);
    this.count = 0;
    this.intervalCount = undefined;
    this.clearCountEvent.emit();
  }

  private emitEvent = () => {
    this.countEvent.emit(this.count);
    this.count++;
  };
}
