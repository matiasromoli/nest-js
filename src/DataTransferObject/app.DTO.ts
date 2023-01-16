export class Usuario {
  name: any;
  password: any;
  email: any;
  address: any;
  phone: any;
  image: any;
  constructor(
    name: string,
    password: string,
    email: string,
    address: any,
    phone: number,
    image: string,
  ) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.image = image;
  }
}
