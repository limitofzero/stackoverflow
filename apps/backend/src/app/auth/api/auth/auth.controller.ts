import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { from, Observable, of, throwError } from 'rxjs';
import { Repository } from 'typeorm';
import { User } from '../../../db/entity/user';
import { LoginRequestDto } from './login-request.dto';
import { map } from 'rxjs/operators';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AuthController {
  constructor(@InjectRepository(User) private userRep: Repository<User>) {}

  @Post('login')
  public login(@Body() loginRequest: LoginRequestDto): Observable<{token: string}> {
    const { password, email } = loginRequest;
    return from(this.userRep.findOne({ email }))
      .pipe(
        map(user => user?.isPasswordValid(password) ? { token: JSON.stringify(user) } : null),
        map(token => {
          if (token) {
            return token;
          }

          this.throwUserDoesntExist();
        })
      );
  }

  throwUserDoesntExist(): void {
    throw new HttpException('User with this email/password doesn\'t exist', 404);
  }
}
