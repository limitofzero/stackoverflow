import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiMockService {
  createUser(user: User): Observable<{ status: number }> {
    return of({ status: 200 });
  }

  login(user: { email: string, password: string }): Observable<{ token: string }> {
    return of({ token: 'true' });
  }
}
