import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Answer } from '../../../interfaces/answer';

@Component({
  selector: 'so-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerComponent {
  @Input()
  answer: Answer;
}
