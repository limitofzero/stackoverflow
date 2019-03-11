import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { HttpErrorResponse } from '@angular/common/http';

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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmitHandler(): void {
    if (this.group.invalid) {
      return;
    }

    const user = this.group.value;
    this.auth.login(user).subscribe({
      next: ({ token }) => this.saveTokenAndGoToSearch(token),
      error: (err) => this.handleError(err)
    });
  }

  private saveTokenAndGoToSearch(token: string): void {
    this.user.setToken(token);
    this.router.navigate(['']);
  }

  private handleError(err: HttpErrorResponse): void {
    if (err.status === 401) {
      this.setControlError('password', err.statusText);
    } else if (err.status === 404) {
      this.setControlError('email', err.statusText);
    }

    this.group.markAsDirty();
  }

  private setControlError(controlName: string, errorName: string) {
    const control = this.group.controls[controlName] as FormControl;
    control.setErrors({ [errorName]: true });
  }
}
