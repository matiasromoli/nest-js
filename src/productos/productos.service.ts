import { InterfaceProductoService } from './interfaces/productos.interfaces';
import { DaoFactoryProducto } from 'src/classes/factory';
import { LoggerService } from 'config/logger';
import { Injectable } from '@nestjs/common';

const DAOProducto = DaoFactoryProducto.get();
const logg = new LoggerService();

@Injectable()
export class ProductosService {
  async getProducto(): Promise<InterfaceProductoService> {
    try {
      return await DAOProducto.listarProducto();
    } catch (error) {
      logg.Error(error);
    }
  }
  async getProductoID(id: number): Promise<InterfaceProductoService> {
    try {
      return await DAOProducto.listarProductoIdent(id);
    } catch (error) {
      logg.Error(error);
    }
  }
  async postProducto(producto: {}) {
    try {
      return await DAOProducto.agregarNuevoProducto(producto);
    } catch (error) {
      logg.Error(error);
    }
  }
  async putProducto(id: number, producto: {}) {
    try {
      return await DAOProducto.editarProducto(id, producto);
    } catch (error) {
      logg.Error(error);
    }
  }
  async deleteProducto(id: number) {
    try {
      return await DAOProducto.eliminarProducto(id);
    } catch (error) {
      logg.Error(error);
    }
  }
}
