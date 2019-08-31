import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appGith]'
})
export class GithDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('skyblue');
    // this.gith('skyblue');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
