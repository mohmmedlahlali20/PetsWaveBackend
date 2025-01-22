import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`serveurruning in : http://localhost:${process.env.PORT}`)
  await app.listen(process.env.PORT ?? 6000);
}
bootstrap();
