import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private user: UserService, public router: Router) {}

  canActivate(): Observable<boolean> {
    return this.user.isAuthenticated().pipe(
      tap(isAuth => !isAuth && this.redirectToLogin()),
    );
  }

  private redirectToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
