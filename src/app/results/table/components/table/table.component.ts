import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../../interfaces/question';

@Component({
  selector: 'so-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  @Input()
  items: Question[] = [];

  @Output()
  readonly tagClicked = new EventEmitter<string>();

  @Output()
  readonly authorClicked = new EventEmitter<number>();

  onTagClickedHandler(tag: string): void {
    this.tagClicked.emit(tag);
  }

  onAuthorClickedHandler(userId: number): void {
    this.authorClicked.emit(userId);
  }
}
