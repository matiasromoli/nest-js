import { NestExpressApplication } from '@nestjs/platform-express';
import { LoggerService } from '../config/logger';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';

import { resolve } from 'path';

const logg = new LoggerService();

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.use(
    session({
      secret: process.env.PASSPORT_SECRET,
      cookie: { maxAge: 600000 },
      saveUninitialized: false,
      rolling: true,
      resave: true,
    }),
  );

  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');

  await app.listen(process.env.PORT);
  logg.Log(`Servidor levantado con éxito: ${process.env.PORT}`);
})();
