import { Body, Controller, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { LoginRequestDto } from './login-request.dto';

@Controller()
export class AuthController {
  @Post('login')
  public login(@Body() loginRequest: LoginRequestDto): Observable<{token: string}> {
    return of({ token: 'success' });
  }
}
