import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'so-sign-up',
  templateUrl: './sign-up-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpContainerComponent {
  group: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthApiService,
    private router: Router) {
    this.group = fb.group({
      name: '',
      email: '',
      password: ''
    });
  }

  onSubmitHandler(): void {
    if (this.group.invalid) {
      return;
    }

    const user = this.group.value;
    this.tryCreateUser(user).subscribe({
      next: () => this.navigateToLogin()
    });
  }

  private tryCreateUser(user: User): Observable<{ status: number }> {
    return this.auth.createUser(user);
  }

  private navigateToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
