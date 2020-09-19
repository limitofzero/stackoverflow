import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'so-navigation-container',
  templateUrl: './navigation-container.component.html',
  styleUrls: ['./navigation-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationContainerComponent {
  isLogged = this.user.isAuthenticated();

  constructor(private user: UserService, private router: Router) {}

  logoutClickHandler(): void {
    this.user.setToken(null);
    this.router.navigate(['/auth/login']);
  }
}
