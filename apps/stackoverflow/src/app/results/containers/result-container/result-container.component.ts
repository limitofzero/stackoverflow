import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { StackoverflowApiService } from '../../../services/stackoverflow-api.service';
import { Observable } from 'rxjs';
import { Question } from '../../../interfaces/question';

@Component({
  selector: 'so-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultContainerComponent {
  questions: Observable<Question[]>;

  constructor(
    private route: ActivatedRoute,
    private api: StackoverflowApiService
  ) {
    this.questions = this.route.queryParams.pipe(
      map(params => params.query),
      switchMap(query => this.api.getQuestions(query))
    );
  }
}
