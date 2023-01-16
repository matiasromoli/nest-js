import { CarritoMongoDb } from 'src/container/mongo';
import { Carrito } from 'src/model/carrito';
import path = require('path');

let instance = null;

export class DAOCarrito extends CarritoMongoDb {
  constructor() {
    super(Carrito);
  }
  static getInstance() {
    if (!instance) {
      instance = new DAOCarrito();
    }

    return instance;
  }
}

