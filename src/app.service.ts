import { Injectable } from '@nestjs/common';

import { DaoFactoryProducto } from './classes/factory';
import { DaoFactoryCarrito } from './classes/factory';
import { LoggerService } from 'config/logger';

const productosDAO = DaoFactoryProducto.get();
const carritoDAO = DaoFactoryCarrito.get();
const logg = new LoggerService();

@Injectable()
export class AppService {
  async listarProductosCarrito(id: number) {
    try {
      const carritos = await carritoDAO.mostrarProductoCarrito(id);

      let carrito: any;

      for (var i = 0; i < carritos.length; i++) {
        const listaProducto = carritos[i].producto;
        carrito = listaProducto;
      }
      return carrito;
    } catch (error) {
      return logg.Error(error);
    }
  }
  async listarProducto() {
    try {
      const productos = await productosDAO.listarProducto();
      return productos;
    } catch (error) {
      return logg.Error(error);
    }
  }
  async listar() {
    try {
      const carritos = await carritoDAO.listarCarrito();
      return carritos;
    } catch (error) {
      return logg.Error(error);
    }
  }
}
