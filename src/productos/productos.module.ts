import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { Module } from '@nestjs/common';


@Module({
imports: [],
controllers: [ProductosController],
providers: [ProductosService],
})
export class ProductosModule {}
