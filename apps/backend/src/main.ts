import { AppModule } from "./app/app.module";
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
          url: '127.0.0.1:8003',
          package: '',
          protoPath: 'libs/back-proto/src/lib/index.proto',
      },
  } 
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();