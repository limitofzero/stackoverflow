import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'so-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
}
