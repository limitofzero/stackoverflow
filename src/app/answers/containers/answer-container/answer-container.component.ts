import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StackoverflowApiService } from '../../../services/stackoverflow-api.service';
import { Answer } from '../../../interfaces/answer';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'so-answer-container',
  templateUrl: './answer-container.component.html',
  styleUrls: ['./answer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerContainerComponent {
  answers: Observable<Answer[]>;

  constructor(private route: ActivatedRoute, private api: StackoverflowApiService) {
    this.answers = this.route.queryParams.pipe(
      map(params => params.questionId),
      switchMap(questionId => this.api.getAnswers(questionId))
    );
  }
}
