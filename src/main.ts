import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  console.log(`running on port ${PORT}`)
  const config = new DocumentBuilder()
    .setTitle('ePass Events')
    .setDescription('A user interface for containing the events management app endpoints')
    .setVersion('v1')
    .addTag('ePass Events')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT);
}
bootstrap();
