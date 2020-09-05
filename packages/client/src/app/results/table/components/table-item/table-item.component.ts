import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../../interfaces/question';

@Component({
  selector: 'so-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableItemComponent {
  @Input()
  question: Question;

  @Output()
  readonly tagClicked = new EventEmitter<string>();

  @Output()
  readonly authorClicked = new EventEmitter<number>();

  onTagClickedHandler(tag: string): void {
    this.tagClicked.emit(tag);
  }

  onAuthorClickedHandler(): void {
    const userId = this.question.owner.user_id;
    this.authorClicked.emit(userId);
  }

  onAuthorKeyPressHandler(event: KeyboardEvent): void {
    const code = event.keyCode || event.charCode;
    if (code === 13) {
      const userId = this.question.owner.user_id;
      this.authorClicked.emit(userId);
    }
  }
}
