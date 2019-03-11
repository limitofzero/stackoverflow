import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[soControlErrorContainer]'
})
export class ControlErrorContainerDirective {
  constructor(public vcr: ViewContainerRef) { }

}
