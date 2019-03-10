import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuickPanelService } from '../../services/quick-panel.service';
import { Observable } from 'rxjs';
import { Question } from '../../../interfaces/question';
import { map } from 'rxjs/operators';

@Component({
  selector: 'so-quick-panel-container',
  templateUrl: './quick-panel-container.component.html',
  styleUrls: ['./quick-panel-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickPanelContainerComponent {
  isOpen: Observable<boolean>;
  loading: Observable<boolean>;
  questions: Observable<Question[]>;

  constructor(private quickPanel: QuickPanelService) {
    this.initObservables();
  }

  private initObservables(): void {
    const panelState = this.quickPanel.getState();

    this.isOpen = panelState.pipe(map(state => state.isOpen));
    this.loading = panelState.pipe(map(state => state.loading));
    this.questions = panelState.pipe(map(state => state.questions));
  }

  onCloseClickHandler(): void {
    this.quickPanel.close();
  }
}
