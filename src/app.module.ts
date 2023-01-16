import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './productos/productos.controller';
import { ConfigModule } from '@nestjs/config';
import { ProductosService } from './productos/productos.service';
import { ProductosModule } from './productos/productos.module';
import { CarritosService } from './carritos/carritos.service';
import { CarritosController } from './carritos/carritos.controller';
import { CarritosModule } from './carritos/carritos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: 'public',
    }),
    ProductosModule,
    CarritosModule,
  ],
  controllers: [AppController, ProductosController, CarritosController],
  providers: [AppService, ProductosService, CarritosService],
})
export class AppModule {}
