import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SERVER_PORT } from './config/constants';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ProductsModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enable global validations
  app.useGlobalPipes(new ValidationPipe());

  //swagger documentation
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [ProductsModule],
  });

  SwaggerModule.setup('/api/docs', app, document);

  //export config values and define port
  const configService = app.get(ConfigService);
  const port = +configService.get<number>(SERVER_PORT) || 3000;

  await app.listen(port);
  console.log(`listening on port ${await app.getUrl()}`);
}
bootstrap();
