import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { StackoverflowApiService } from '../../../services/stackoverflow-api.service';
import { Observable } from 'rxjs';
import { Question } from '../../../interfaces/question';
import { QuickPanelService } from '../../services/quick-panel.service';

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
