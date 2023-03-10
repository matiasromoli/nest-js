import { ProductoInterfaceModel } from './interfaces/producto.interface';
import { Schema, model } from 'mongoose';

export const modelProducto = new Schema<ProductoInterfaceModel>({
  nombre: { type: String, required: true },
  descri: { type: String, required: true },
  timeday: { type: String, required: true },
  codigo: { type: String, required: true },
  precio: { type: Number, required: true },
  foto: { type: String, required: true },
  stock: { type: Number, required: true },
});
export const Producto = model<ProductoInterfaceModel>(
  'producto',
  modelProducto,
);
