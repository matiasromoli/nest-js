import { ProductoMongoDb } from 'src/container/mongo';
import { Producto } from 'src/model/producto';

let instance = null;

export class DAOProducto extends ProductoMongoDb {
  constructor() {
    super(Producto);
  }
  static getInstance() {
    if (!instance) {
      instance = new DAOProducto();
    }

    return instance;
  }
}
