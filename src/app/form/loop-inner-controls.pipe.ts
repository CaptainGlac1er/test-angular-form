import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Pipe({
  name: 'loopInnerControls'
})
export class LoopInnerControlsPipe implements PipeTransform {

  hasInnerControls(value: AbstractControl): value is AbstractControl & { controls: AbstractControl[] } {
    return 'controls' in value;
  }

  transform(value: AbstractControl): AbstractControl[] {
    if(this.hasInnerControls(value)) {
      return value.controls;
    }
    return [];
  }

}
