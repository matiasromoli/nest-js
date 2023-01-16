import { InterfaceCarritoService } from './interfaces/carrito.interface';
import { DaoFactoryCarrito } from 'src/classes/factory';
import { LoggerService } from 'config/logger';
import { Injectable } from '@nestjs/common';

const DAOCarrito = DaoFactoryCarrito.get();
const logg = new LoggerService();

@Injectable()
export class CarritosService {
  async getCarrito(): Promise<InterfaceCarritoService> {
    try {
      return await DAOCarrito.listarCarrito();
    } catch (error) {
      logg.Error(error);
    }
  }
  async postCarrito(): Promise<InterfaceCarritoService> {
    try {
      let productos = [];
      return await DAOCarrito.crearCarrito(productos);
    } catch (error) {
      logg.Error(error);
    }
  }
  async deleteCarrito(id: number) {
    try {
      return await DAOCarrito.deleteCarrito(id);
    } catch (error) {
      logg.Error(error);
    }
  }
  async postProductoCarrito(id: number, ident: number) {
    try {
      return await DAOCarrito.agregarProductoCarrito(id, ident);
    } catch (error) {
      logg.Error(error);
    }
  }
  async getMostrarCarrito(id: number): Promise<InterfaceCarritoService> {
    try {
      return DAOCarrito.mostrarProductoCarrito(id);
    } catch (error) {
      logg.Error(error);
    }
  }
  async deleteProductoCarrito(id: number, ident: number) {
    try {
      return DAOCarrito.deleteProductoCarrito(id, ident);
    } catch (error) {
      logg.Error(error);
    }
  }
}
