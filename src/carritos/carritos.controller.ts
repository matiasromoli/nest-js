import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Response,
  Body,
  Param,
} from '@nestjs/common';


import { CarritosService } from './carritos.service';
const carritoService = new CarritosService();

@Controller('api/carritos')
export class CarritosController {
  @Get('/')
  async listarCarrito(@Response() res) {
    try {
      const carritos = await carritoService.getCarrito();
      res.status(200).json(carritos);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @Post('/')
  async crearCarrito(@Response() res) {
    try {
      await carritoService.postCarrito();
      res.status(200).json('El carrito ha sido creado');
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @Delete('/:id')
  async eliminarCarrito(@Response() res, @Param('id') id: number) {
    try {
      await carritoService.deleteCarrito(id);
      res.status(200).json('El carrito ha sido eliminado con exito.');
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @Put('/:id/productos')
  async agregarCarrito(@Response() res, @Param('id') id:number, @Body() body: any) {
    try {
      await carritoService.postProductoCarrito(id, body.id);
      res.status(200).json('Producto agregado al carrito');
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @Get('/:id/productos')
  async mostrarCarrito(@Response() res, @Param('id') id:number) {
    try {
      const carrito = await carritoService.getMostrarCarrito(id);
      res.status(200).json(carrito);
    } catch (error) {
      res.status(400).json(error);
    }
  }
  @Delete("/:id/productos/:ident")
  async eliminarProductoCarrito(@Response() res, @Param("id") id: number, @Body() body: any){
    try {
        await carritoService.deleteProductoCarrito(id, body.id)
        res.status(200).json("Producto eliminado con exito");
    } catch (error) {
        res.status(400).json(error);
    }
  }
}
