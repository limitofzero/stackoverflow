import { Component, Input, OnDestroy } from '@angular/core';
import { Question } from '../../../interfaces/question';
import { StackoverflowApiService } from '../../../services/stackoverflow-api.service';
import { QuickPanelService } from '../../services/quick-panel.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'so-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent {
  @Input()
  questions: Question[] = [];

  constructor(
    private api: StackoverflowApiService,
    private quickPanel: QuickPanelService
  ) {}

  onTagClickedHandler(tag: string): void {
    const observable = this.api.getQuestionByTag(tag);
    this.openPanelAndLoadData(observable);
  }

  onAuthorClickedHandler(userId: number): void {
    const observable = this.api.getQuestionsByUserId(userId);
    this.openPanelAndLoadData(observable);
  }

  private openPanelAndLoadData(observable: Observable<Question[]>): void {
    this.quickPanel.open();
    this.quickPanel.setLoading(true);
    observable.subscribe({
      next: questions => {
        this.quickPanel.setQuestions(questions);
        this.quickPanel.setLoading(false);
      }
    });
  }
}
