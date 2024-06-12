import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ContentChild,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit, AfterContentInit
{
  @Input() element: { type: string; name: string; content: string };
  // This static: true is important because the code access the header variable at ngOnInit
  @ViewChild('heading', { static: true }) header: ElementRef<HTMLDivElement>;
  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef<HTMLParagraphElement>;

  constructor() {
    console.log('Contructor called');
  }
  ngAfterContentInit(): void {
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewInit(): void {
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('Element destroyed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChange called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log(
      'Text content of paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }
}
