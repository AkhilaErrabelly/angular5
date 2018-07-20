import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[mvNumberOnly]',
  providers: [{ provide: NG_VALIDATORS, useExisting: NumberOnlyDirective, multi: true }]
})
export class NumberOnlyDirective {
  @Input() customMin: number;
  @Input() customMax: number;

  defaultValue: number = 0;
  //private regex: RegExp = new RegExp(/^-?[0-9](\.[0-9]*){0,1}$/g);
  private regex1: any = /^-?\d+\.?\d*$/;
  private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'Control'];

  constructor(private el: ElementRef) {
    this.customMax = 1000;
    this.customMin = 1
  }
  @HostListener('keyup', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);

    console.log("current value of input : ", current);
    //console.log("next value of input : ", next);
    //var match = String(next).match(this.regex);
    //var match1 = String(next).match(this.regex1);
    //console.log("match: ", match);
    //console.log("match1: ", match1!);
    var composedInput = Number(next); 
    if (isNaN(composedInput)) {
      var resetValue = current.replace(event.key, "");
      console.log("composedInput: ", composedInput);
      this.el.nativeElement.value = resetValue;
      event.preventDefault();
    }
    else{
      console.log("composedInput is a number: ", composedInput);
      if(this.validateLimits(Number(current))){
        // emit or dispatch events
      }
      else{
        // do stuff
        event.preventDefault();
      }
    }
  }

  validateLimits(inputValue: number): boolean{
    console.log("validateLimits input:", inputValue);
    if(inputValue < this.customMin || inputValue > this.customMax){
      this.el.nativeElement.style.backgroundColor = 'red';
      return false;
    }
    this.el.nativeElement.style.backgroundColor = null;
    return true;
  }
}
