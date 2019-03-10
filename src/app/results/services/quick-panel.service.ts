import { Injectable } from '@angular/core';
import { Question } from '../../interfaces/question';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QuickPanelState } from '../interfaces/quick-panel-state';

const initialState: QuickPanelState  = {
  isOpen: false,
  loading: false,
  questions: []
};

@Injectable()
export class QuickPanelService {
  private state = new BehaviorSubject<QuickPanelState>(initialState);

  getState(): Observable<QuickPanelState> {
    return this.state;
  }

  open(): void {
    const current = this.state.getValue();
    this.state.next({ ...current, isOpen: true });
  }

  close(): void {
    const current = this.state.getValue();
    this.state.next({ ...current, isOpen: false });
  }

  setLoading(loading: boolean): void {
    const current = this.state.getValue();
    this.state.next({ ...current, loading });
  }

  setQuestions(questions: Question[]): void {
    const current = this.state.getValue();
    this.state.next({ ...current, questions });
  }
}
