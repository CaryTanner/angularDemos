import {
  Directive,
  Input,
  SimpleChanges,
  Renderer2,
  ElementRef,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input() searchedWord: string; //searchText
  @Input() content: string; //html to change
  @Input() classToApply: string; //add class to change styling
  @Input() setTitle = false; //sets title attribute of html

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.content) {
      return;
    }
    if (this.setTitle) {
      this.renderer.setProperty(
        this.element.nativeElement,
        'title',
        this.content
      );
    }
    if (!this.searchedWord || !this.searchedWord.length || !this.classToApply) {
      this.renderer.setProperty(
        this.element.nativeElement,
        'innerHTML',
        this.content
      );
      return;
    }
  }
  getFormattedText(){
    const result = new RegExp(`(${this.searchedWord})`, 'gi')
    return this.content.replace(result, `<span class="${this.classToApply}">$1</span>` )
  }
}
