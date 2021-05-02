import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[HighlightRow]'
})
export class HighlightRowDirective {

  // mouseOver:boolean = false

  // @HostListener('mouseenter') onMouseEnter(){
  //   this.mouseOver = true
  // }

  // @HostListener('mouseleave') onMouseLeave(){
  //   this.mouseOver = false
  // }

  constructor(el: ElementRef) {
    el.nativeElement.style.borderBottom = "yellow 2px solid";
    el.nativeElement.style.borderTop = "yellow 2px solid";
  }


}
