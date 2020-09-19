import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routesChangesAnimations } from './animations/route-animation';

@Component({
  selector: 'so-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routesChangesAnimations ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
