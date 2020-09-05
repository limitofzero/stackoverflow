import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'so-forgot',
  templateUrl: './forgot-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotContainerComponent {
  group: FormGroup;

  constructor(private fb: FormBuilder) {
    this.group = fb.group({
      email: ['', Validators.required]
    });
  }
}
