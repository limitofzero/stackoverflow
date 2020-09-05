import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorDirective } from './directives/control-error.directive';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ControlErrorContainerDirective } from './directives/control-error-container.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';
import { errors, FORM_ERRORS } from './form-errors';

@NgModule({
  declarations: [
    ControlErrorDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ControlErrorDirective,
    ControlErrorContainerDirective,
    FormSubmitDirective
  ],
  entryComponents: [
    ControlErrorComponent
  ],
  providers: [
    { provide: FORM_ERRORS, useValue: errors }
  ]
})
export class FormValidationModule { }
