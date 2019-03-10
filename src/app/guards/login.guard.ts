import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { CanActivate, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private user: UserService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.user.isAuthenticated().pipe(
      tap(isAuth => isAuth && this.redirectToHome()),
      map(isAuth => !isAuth)
    );
  }

  private redirectToHome(): void {
    this.router.navigate(['']);
  }
}
