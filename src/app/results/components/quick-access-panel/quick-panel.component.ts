import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'so-quick-panel',
  templateUrl: './quick-panel.component.html',
  styleUrls: ['./quick-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuickPanelComponent {
  @Output()
  readonly close = new EventEmitter<void>();

  onCloseClickHandler(): void {
    this.close.emit();
  }
}
