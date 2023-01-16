import { DAOProducto } from 'src/productos/DataAccessObject/productos.DAO';
import { DAOCarrito } from 'src/carritos/DataAccesObject/carritos.DAO';


export class DaoFactoryProducto {
  static get() {
    switch (process.env.PERS) {
      case 'MONGODB':
        return new DAOProducto();
    }
  }
}

export class DaoFactoryCarrito {
  static get() {
    switch (process.env.PERS) {
      case 'MONGODB':
        return new DAOCarrito();
    }
  }
}
