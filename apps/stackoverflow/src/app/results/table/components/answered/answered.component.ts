import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'so-answered',
  templateUrl: './answered.component.html',
  styleUrls: ['./answered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnsweredComponent {
  @Input()
  count: number;
}
