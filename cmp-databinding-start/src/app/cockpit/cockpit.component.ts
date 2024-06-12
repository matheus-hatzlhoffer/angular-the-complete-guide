import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  @ViewChild('serverContent') serverContent: ElementRef<HTMLInputElement>;

  onAddServer(severName: HTMLInputElement) {
    console.log(this.serverContent);
    this.serverCreated.emit({
      name: severName.value,
      content: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(severName: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: severName.value,
      content: this.serverContent.nativeElement.value,
    });
  }
}
