import { Error } from '../classes/message/message';
import { mongoClient } from 'src/classes/client';
import { Producto } from 'src/model/producto';
import mongoose from 'mongoose';

export class ProductoMongoDb {
  collection: any;
  connect: any;
  constructor(model: object) {
    this.collection = model;
    this.connect = mongoClient.getInstance();
  }
  async listarProducto() {
    try {
      await this.connect.connected();

      const producto = await this.collection.find();
      return producto;
    } catch (error) {
      return [];
    } finally {
      await this.connect.disconnect();
    }
  }
  async listarProductoIdent(id: number) {
    try {
      await this.connect.connected();

      const producto = await this.collection.findById(id);
      return producto;
    } catch (error) {
      throw new Error(500, `No existe producto con el ID: ${id}`, error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async agregarNuevoProducto(data: {}) {
    try {
      await this.connect.connected();

      const today = new Date();
      const producto = await this.collection.create({
        ...data,
        timeday: today.toLocaleString(),
      });
      return producto;
    } catch (error) {
      throw new Error(
        500,
        'No se pudo agregar el producto a la base de datos.',
        error,
      );
    } finally {
      await this.connect.disconnect();
    }
  }
  async editarProducto(id: number, product: any) {
    try {
      await this.connect.connected();
      return await this.collection.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            nombre: product.nombre,
            descri: product.descri,
            codigo: product.codigo,
            precio: product.precio,
            foto: product.foto,
            stock: product.stock,
          },
        },
      );
    } catch (error) {
      throw new Error(
        500,
        'No se pudo modificar el producto solicitado',
        error,
      );
    } finally {
      await this.connect.disconnect();
    }
  }
  async eliminarProducto(id: number) {
    try {
      await this.connect.connected();

      return await this.collection.findByIdAndDelete({ _id: id });
    } catch (error) {
      throw new Error(500, 'No se pudo eliminar el producto solicitado', error);
    } finally {
      await this.connect.disconnect();
    }
  }
}
export class CarritoMongoDb {
  collection: any;
  connect: any;
  constructor(model: object) {
    this.collection = model;
    this.connect = mongoClient.getInstance();
  }
  async listarCarrito() {
    try {
      await this.connect.connected();

      const carrito = await this.collection.find();
      return carrito;
    } catch (error) {
      return [];
    } finally {
      await this.connect.disconnect();
    }
  }
  async crearCarrito(product: Object) {
    try {
      await this.connect.connected();

      const today = new Date();
      const crearCarrito = await this.collection.create({
        ...product,
        timeday: today,
      });
      return crearCarrito;
    } catch (error) {
      throw new Error(500, 'No se pudo crear el carrito.', error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async deleteCarrito(id: number) {
    try {
      await this.connect.connected();
      return await this.collection.findByIdAndDelete({
        _id: id,
      });
    } catch (error) {
      return new Error(500, 'No se pudo eliminar el carrito', error);
    } finally {
      await this.connect.disconnect();
    }
  }

  async agregarProductoCarrito(id:number, ident:number) {
    try {
      await this.connect.connected();

      const product = new ProductoMongoDb(Producto);
      const p = await product.listarProductoIdent(ident);

      await this.collection.findByIdAndUpdate(
        { _id: id },
        { $push: { producto: p } },
      );
    } catch (error) {
      throw new Error(500, 'Hubo un error, vuelva a intentarlo.', error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async mostrarProductoCarrito(id: number) {
    try {
      await this.connect.connected();

      const carrito = await this.collection.findById(
        { _id: id },
        { _id: 0, producto: 1 },
      );

      return carrito;
    } catch (error) {
      throw new Error(500, 'Hubo un error, vuelva a intentarlo.', error);
    } finally {
      await this.connect.disconnect();
    }
  }
  async deleteProductoCarrito(id: number, ident: number) {
    try {
      await this.connect.connected();

      const objId = new mongoose.Types.ObjectId(ident);

      return await this.collection.updateMany(
        { _id: id },
        {
          $pull: { producto: { _id: objId } },
        },
      );
    } catch (error) {
      throw new Error(
        500,
        'No se pudo eliminar el producto del carrito.',
        error,
      );
    } finally {
      await this.connect.disconnect();
    }
  }
}
