import { CarritosController } from './carritos.controller';
import { CarritosService } from './carritos.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [CarritosController],
  providers: [CarritosService],
})
export class CarritosModule {}
