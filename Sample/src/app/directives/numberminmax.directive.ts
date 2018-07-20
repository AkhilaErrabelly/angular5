import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumberminmax]'
})
export class NumberminmaxDirective {
  min: number = 0;

  constructor(private el: ElementRef) {
    this.el.nativeElement.min = this.min;
  }

  @HostListener('mousewheel', ['$event'])
  onWheel(event: KeyboardEvent){
    event.stopPropagation();
    event.preventDefault();
    return false;
  }
}
