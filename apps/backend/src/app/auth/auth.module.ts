import { Module } from '@nestjs/common';
import { AuthController } from './api/auth/auth.controller';

@Module({
  providers: [],
  controllers: [AuthController]
})
export class AuthModule {}
