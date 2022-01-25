import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const prefix = '/api/';
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(prefix);

  await app.listen(3000);
}
bootstrap();
