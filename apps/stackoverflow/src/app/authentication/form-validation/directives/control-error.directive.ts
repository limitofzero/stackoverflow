import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, Host,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  ViewContainerRef
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, merge, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FORM_ERRORS } from '../form-errors';
import { ControlErrorComponent } from '../components/control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorDirective implements OnInit, OnDestroy {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit: Observable<Event>;

  controlChangeSubscription: Subscription;

  constructor(
    @Self() private controlDir: NgControl,
    @Inject(FORM_ERRORS) private errors,
    private factoryResolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    @Optional() @Host() private form: FormSubmitDirective,
    @Optional() controlErrorContainer: ControlErrorContainerDirective
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit = this.form ? this.form.submit : EMPTY;
  }

  ngOnInit(): void {
    this.controlChangeSubscription = merge(
      this.controlDir.control.statusChanges,
      this.controlDir.control.valueChanges,
      this.submit
    ).subscribe({
      next: () => this.updateErrorIfNeed()
    });
  }

  private updateErrorIfNeed() {
    const controlErrors = this.controlDir.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.errors[firstKey];
      const text = getError(controlErrors[firstKey]);
      this.setError(text);
    } else if (this.ref) {
      this.setError(null);
    }
  }

  private setError(error: string): void {
    if (!this.ref) {
      const factory = this.factoryResolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.vcr.createComponent(factory);
    }

    this.ref.instance.error = error;
  }

  ngOnDestroy(): void {
    this.controlChangeSubscription.unsubscribe();
  }
}
