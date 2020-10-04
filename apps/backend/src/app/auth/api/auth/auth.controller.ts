import { Body, Controller, Post } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
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
    return from(this.userRep.findOne({ email: loginRequest.email }))
      .pipe(
        map(user => ({ token: JSON.stringify(user) }))
      );
  }
}
