import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Answer } from '../../../interfaces/answer';

@Component({
  selector: 'so-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerListComponent {
  @Input()
  answers: Answer[] = [];
}
