import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserService {
  private token: BehaviorSubject<string>;
  readonly helper = new JwtHelperService();

  constructor() {
    const token = localStorage.getItem('token');
    this.token = new BehaviorSubject(token || null);
  }

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    this.token.next(token);
  }

  isAuthenticated(): Observable<boolean> {
    return this.token.pipe(
      map(token => this.helper.isTokenExpired(token)),
      map(isExpired => !isExpired)
    );
  }
}
