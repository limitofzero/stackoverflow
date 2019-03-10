import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'so-tag-list',
  templateUrl: './tag-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent {
  @Input()
  tags: string[] = [];

  @Output()
  readonly clicked = new EventEmitter<string>();

  onClickHandler(tag: string): void {
    this.clicked.emit(tag);
  }

  onKeyPressHandler(event: KeyboardEvent, tag: string): void {
    const code = event.keyCode || event.charCode;
    if (code === 13) {
      this.clicked.emit(tag);
    }
  }
}
