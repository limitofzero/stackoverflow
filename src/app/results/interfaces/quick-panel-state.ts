import { Question } from '../../interfaces/question';

export interface QuickPanelState {
  isOpen: boolean;
  loading: boolean;
  questions: Question[];
}
