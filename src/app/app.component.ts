import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { routesChangesAnimations } from './animations/route-animation';

@Component({
  selector: 'so-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routesChangesAnimations ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private user: UserService, private router: Router) {}

  logoutClickHandler(): void {
    this.user.setToken(null);
    this.router.navigate(['/auth/login']);
  }
}
