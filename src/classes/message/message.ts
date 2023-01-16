export class Error {
  status: any;
  descripcion: any;
  detalle: any;
  constructor(status: number, descripcion: string, detalle: string) {
    this.status = status;
    this.descripcion = descripcion;
    this.detalle = detalle;
  }
}
