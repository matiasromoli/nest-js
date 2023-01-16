import { CarritoInterfaceModel } from "./interfaces/carritos.interface";
import { Schema, model } from "mongoose";

export const modelCarrito = new Schema<CarritoInterfaceModel> ({
    producto: { type: [], required: true },
})
export const Carrito = model<CarritoInterfaceModel>("carritos", modelCarrito)