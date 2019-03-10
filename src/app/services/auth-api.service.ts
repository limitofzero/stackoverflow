import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

// todo переместить в auth модуль
@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<{ status: number }> {
    const url = `${ environment.authApiPrefix }/users/new`;
    return this.http.post<{ status: number }>(url, user);
  }

  login(user: { email: string, password: string }): Observable<any> {
    const url = `${ environment.authApiPrefix }/login`;
    return this.http.post(url, user);
  }
}
