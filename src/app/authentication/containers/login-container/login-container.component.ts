import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'so-login',
  templateUrl: './login-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  group: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthApiService,
    private user: UserService,
    private router: Router
  ) {
    this.group = fb.group({
      email: '',
      password: ''
    });
  }

  onSubmitHandler(): void {
    if (this.group.invalid) {
      return;
    }

    const user = this.group.value;
    this.auth.login(user).subscribe({
      next: ({ token }) => this.saveTokenAndGoToSearch(token)
    });
  }

  private saveTokenAndGoToSearch(token: string): void {
    this.user.setToken(token);
    this.router.navigate(['']);
  }
}
