import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthApiService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<{ status: number }> {
    const url = `${ environment.authApiPrefix }/users/new`;
    return this.http.post<{ status: number }>(url, user);
  }

  login(user: { email: string, password: string }): Observable<{ token: string }> {
    const url = `${ environment.authApiPrefix }/login`;
    return this.http.post<{ token: string }>(url, user);
  }
}
