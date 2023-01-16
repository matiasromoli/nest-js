import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  Response,
} from '@nestjs/common';
import { DTOProducto } from './DataTransferObject/producto.DTO';
import { ProductosService } from './productos.service';

const productoService = new ProductosService();

@Controller('api/productos')
export class ProductosController {
  @Get('/')
  async listarProducto(@Response() res) {
    try {
      const producto = await productoService.getProducto();
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  @Get('/:id')
  async listarProductoID(@Param('id') id, @Response() res) {
    try {
      const producto = await productoService.getProductoID(id);
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  @Post('/')
  async agregarProducto(@Response() res, @Body() producto: DTOProducto) {
    try {
      await productoService.postProducto(producto);
      res.status(200).json('El producto se ha agregado con exito');
    } catch (error) {
      res.status(500).json(error);
    }
  }
  @Put('/:id')
  async editarProducto(
    @Response() res,
    @Param('id') id,
    @Body() producto: DTOProducto,
  ) {
    try {
      await productoService.putProducto(id, producto);
      res.status(200).json('El producto se ha editado con exito');
    } catch (error) {
      res.status(500).json(error);
    }
  }
  @Delete('/:id')
  async eliminarProductos(@Param('id') id, @Response() res) {
    try {
      await productoService.deleteProducto(id);
      res.status(200).json('El producto se ha eliminado con exito');
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
