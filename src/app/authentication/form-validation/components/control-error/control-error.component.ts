import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'so-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {
  private errorText: string;
  visible = true;

  get error(): string {
    return this.errorText;
  }
  @Input() set error(value) {
    if (value !== this.errorText) {
      this.errorText = value;
      this.visible = !!value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }
}
