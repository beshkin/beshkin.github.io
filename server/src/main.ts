import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: process.env.WEB_APP_URL,
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
